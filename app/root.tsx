import { useContext, useMemo } from 'react'
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { ChakraProvider, extendTheme, Box, Heading, Text, Code, cookieStorageManagerSSR } from '@chakra-ui/react'
import { ServerStyleContext } from './context'

export const meta: MetaFunction = () => [
  { charset: 'utf-8' },
  { viewport: 'width=device-width, initial-scale=1.0' },
  { title: 'App Template' },
  { name: 'description', content: 'Remix v2 and Chakra UI v2 out-of-the-box template' },
]

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // first time users will not have any cookies and you may not return
  // undefined here, hence ?? is necessary
  return request.headers.get('cookie') ?? ''
}

const DEFAULT_COLOR_MODE: 'dark' | 'light' | 'system' | null = 'dark'
const CHAKRA_COOKIE_COLOR_KEY = 'chakra-ui-color-mode'

const extenstion = {
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
}
const baseTheme = extendTheme(extenstion)

interface DocumentProps {
  children: React.ReactNode
  title?: string
}

function Document({ children, title = 'App Name' }: DocumentProps) {
  function getColorMode(cookies: string) {
    const match = cookies.match(new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`))
    return match == null ? void 0 : match[2]
  }

  let cookies = useLoaderData<typeof loader>()
  if (typeof document !== 'undefined') {
    cookies = document.cookie
  }

  const colorMode = useMemo(() => {
    let color = getColorMode(cookies)
    if (!color && DEFAULT_COLOR_MODE) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`
      color = DEFAULT_COLOR_MODE
    }
    return color
  }, [cookies])

  const serverStyleData = useContext(ServerStyleContext)

  return (
    <html
      lang="en"
      {...(colorMode && {
        'data-theme': colorMode,
        style: { colorScheme: colorMode },
      })}
    >
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style key={key} data-emotion={`${key} ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        ))}
      </head>
      <body
        {...(colorMode && {
          className: `chakra-ui-${colorMode}`,
        })}
      >
        <ChakraProvider colorModeManager={cookieStorageManagerSSR(cookies)} theme={baseTheme}>
          {children}
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

// How ChakraProvider should be used on ErrorBoundary
export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Document title="Error!">
        <ChakraProvider>
          <Box>
            <Heading as="h1" bg="blue.500">
              {error.status} {error.statusText}
            </Heading>
            <Text>{error.data}</Text>
          </Box>
        </ChakraProvider>
      </Document>
    )
  } else if (error instanceof Error) {
    return (
      <Document title="Error!">
        <ChakraProvider>
          <Box>
            <Heading as="h1" bg="red.500">
              Error
            </Heading>
            <Text>{error.message}</Text>
            <Heading as="h2" bg="red.500">
              Stack trace:
            </Heading>
            <Code>{error.stack}</Code>
          </Box>
        </ChakraProvider>
      </Document>
    )
  } else {
    return <Heading as="h1">Something went wrong</Heading>
  }
}
