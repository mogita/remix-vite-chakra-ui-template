import { Flex } from '@chakra-ui/react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix & Chakra UI App' }, { name: 'description', content: 'Welcome to Remix with Chakra UI!' }]
}

export default function Index() {
  return <Flex>Hello Remix with Chakra UI and Vite!</Flex>
}
