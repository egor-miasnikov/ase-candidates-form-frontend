import React, { useState } from 'react'
import { Box, Flex, Grid, Image } from '@chakra-ui/core'
import { Redirect } from 'react-router-dom'
import 'firebase/auth'
import Google from './Google'
import pic from '../../images/illustration.svg'
import Header from '../Header'
import details from '../../images/details.svg'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <Box>
            <Grid templateRows="1fr 3fr">
                <Header rightImage={details} />
                <Box>
                    <Grid templateColumns="1fr 1fr">
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                            height="70VH"
                            minWidth="400px"
                        >
                            <Image src={pic} />
                        </Flex>
                        <Flex alignItems="flex-start" justifyContent="flex-start" flexDirection="row" marginTop="50px">
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
