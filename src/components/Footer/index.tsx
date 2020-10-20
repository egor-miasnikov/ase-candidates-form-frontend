import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'

const Footer = () => {
    return (
        <Box>
            <Flex paddingTop="50px" alignItems="center" justifyContent="center" flexDirection="column">
                <Text fontSize="16px" lineHeight="19px" fontWeight="400">
                    Powered by EPAM
                </Text>
            </Flex>
        </Box>
    )
}

export default Footer
