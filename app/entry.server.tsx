import { PassThrough } from 'node:stream'
import { installGlobals } from '@remix-run/node'
installGlobals()

import type { AppLoadContext, EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import * as isbotModule from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'

import createEmotionCache from '@emotion/cache'
import createEmotionServer from '@emotion/server/create-instance'
import { CacheProvider as EmotionCacheProvider } from '@emotion/react'

const ABORT_DELAY = 5_000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext,
) {
  return isBotRequest(request.headers.get('user-agent'))
    ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext)
}

// We have some Remix apps in the wild already running with isbot@3 so we need
// to maintain backwards compatibility even though we want new apps to use
// isbot@4.  That way, we can ship this as a minor Semver update to @remix-run/dev.
function isBotRequest(userAgent: string | null) {
  if (!userAgent) {
    return false
  }

  // isbot >= 3.8.0, >4
  if ('isbot' in isbotModule && typeof isbotModule.isbot === 'function') {
    return isbotModule.isbot(userAgent)
  }

  // isbot < 3.8.0
  if ('default' in isbotModule && typeof isbotModule.default === 'function') {
    return isbotModule.default(userAgent)
  }

  return false
}

const handleBotRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) =>
  new Promise((resolve, reject) => {
    let didError = false
    const emotionCache = createEmotionCache({ key: 'css' })

    const { pipe, abort } = renderToPipeableStream(
      <EmotionCacheProvider value={emotionCache}>
        <RemixServer context={remixContext} url={request.url} />
      </EmotionCacheProvider>,
      {
        onAllReady: () => {
          const reactBody = new PassThrough()
          const emotionServer = createEmotionServer(emotionCache)

          const bodyWithStyles = emotionServer.renderStylesToNodeStream()
          reactBody.pipe(bodyWithStyles)

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            // @ts-ignore
            new Response(bodyWithStyles, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          )

          pipe(reactBody)
        },
        onShellError: (error: unknown) => {
          reject(error)
        },
        onError: (error: unknown) => {
          didError = true
          console.error(error)
        },
      },
    )

    setTimeout(abort, ABORT_DELAY)
  })

const handleBrowserRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) =>
  new Promise((resolve, reject) => {
    let didError = false
    const emotionCache = createEmotionCache({ key: 'css' })

    const { pipe, abort } = renderToPipeableStream(
      <EmotionCacheProvider value={emotionCache}>
        <RemixServer context={remixContext} url={request.url} />
      </EmotionCacheProvider>,
      {
        onShellReady: () => {
          const reactBody = new PassThrough()
          const emotionServer = createEmotionServer(emotionCache)

          const bodyWithStyles = emotionServer.renderStylesToNodeStream()
          reactBody.pipe(bodyWithStyles)

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            // @ts-ignore
            new Response(bodyWithStyles, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          )

          pipe(reactBody)
        },
        onShellError: (error: unknown) => {
          reject(error)
        },
        onError: (error: unknown) => {
          didError = true
          console.error(error)
        },
      },
    )

    setTimeout(abort, ABORT_DELAY)
  })
