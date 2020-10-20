import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core'
import React from 'react'

const AppContainer = ({ children }: Record<string, any>) => (
    <ThemeProvider>
        <CSSReset />
        <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
)

export default AppContainer
