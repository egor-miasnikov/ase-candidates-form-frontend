import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const AppContainer = ({ children }: Record<string, any>) => <ChakraProvider>{children}</ChakraProvider>

export default AppContainer
