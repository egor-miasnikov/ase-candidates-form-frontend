import React, { useState } from 'react'
import { Box, Flex, Grid, Image } from '@chakra-ui/core'
import { Redirect } from 'react-router-dom'
import 'firebase/auth'
import './index.css'
import Google from './Google'
import pic from '../../images/illustration.svg'
import Logo from '../../images/ase_logo.svg'
import details from '../../images/details.svg'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <Box>
            <Grid templateRows="1fr 3fr" height="100VH">
                <Box display="block">
                    <Grid templateColumns="1fr 1fr">
                        <Flex alignItems="flex-start" flexDirection="column" marginTop="86px" marginLeft="117px">
                            <Image height="64px" width="126px" src={Logo} />
                        </Flex>
                        <Flex alignItems="flex-end" flexDirection="column">
                            <Image src={details} />
                        </Flex>
                    </Grid>
                </Box>
                <Box>
                    <Grid templateColumns="1fr 1fr">
                        <Flex alignItems="center" justifyContent="center" flexDirection="column">
                            <Image src={pic} />
                        </Flex>
                        <Flex alignItems="flex-start" justifyContent="center" flexDirection="row" marginTop="50px">
                            <Google setIsLogin={setIsLogin} />
                        </Flex>
                        {isLogin && <Redirect to="/" />}
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}

export default Login
