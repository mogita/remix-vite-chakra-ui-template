import { ChakraProvider, extendTheme, Box, Heading, Text, Code } from '@chakra-ui/react'
import type { MetaFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from '@remix-run/react'

import { theme } from './theme/src/index'

export const meta: MetaFunction = () => [
  { charset: 'utf-8' },
  { viewport: 'width=device-width, initial-scale=1.0' },
  { title: 'Chat with Searchables' },
  { name: 'description', content: 'Demo app for chatting with LLM and get automatically web search as references' },
]

function Document({ children, title = 'App title' }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const proTheme = extendTheme(theme)
const extenstion = {
  colors: { ...proTheme.colors, brand: proTheme.colors.purple },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
}
const baseTheme = extendTheme(extenstion, proTheme)

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={baseTheme}>
        <Outlet />
      </ChakraProvider>
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
