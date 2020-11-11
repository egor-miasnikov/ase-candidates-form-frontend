import React, { useState } from 'react'
import { Box, Image, Flex, Grid } from '@chakra-ui/core'
import Logo from '../../images/ase_logo.svg'
import { Redirect } from 'react-router-dom'

const Header = ({ rightImage }: Record<any, any>) => {
    const [isBack, setIsBack] = useState(false)
    return (
        <Box display="block">
            <Grid templateColumns={rightImage ? '1fr 1fr' : '1fr'}>
                <Flex alignItems="flex-start" flexDirection="column" marginTop="56px" marginLeft="120px">
                    <Image height="56px" width="120px" src={Logo} onClick={() => setIsBack(true)} cursor="pointer" />
                </Flex>
                {rightImage ? (
                    <Flex alignItems="flex-end" flexDirection="column">
                        <Image src={rightImage} />
                    </Flex>
                ) : null}
            </Grid>
            {isBack && <Redirect to="/" />}
        </Box>
    )
}

export default Header
