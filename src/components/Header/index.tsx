import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/core'
import Logo from '../../images/ase_logo.png'

const Header = () => {
    return (
        <Box display="block" marginTop="20px">
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
                <Image height="240px" width="240px" src={Logo} />
            </Flex>
        </Box>
    )
}

export default Header
