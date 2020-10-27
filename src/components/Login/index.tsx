import React, { useState } from 'react'
import { Box, Flex, Grid } from '@chakra-ui/core'
import { Redirect } from 'react-router-dom'
import 'firebase/auth'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import Google from './Google'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <div className="Login">
            <Grid templateRows="1fr 3fr 1fr" height="100VH">
                <Header />
                <Box marginTop="32px">
                    <Flex alignItems="center" justifyContent="center" flexDirection="column">
                        <Google setIsLogin={setIsLogin} />
                    </Flex>
                    {isLogin && <Redirect to="/" />}
                </Box>
                <Footer />
            </Grid>
        </div>
    )
}

export default Login
