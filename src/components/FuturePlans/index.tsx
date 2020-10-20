import React from 'react'
import './index.css'
import { Box, Flex, Grid, Text } from '@chakra-ui/core'
import Header from '../Header'
import Footer from '../Footer'
const FuturePlans = () => {
    return (
        <div className="FuturePlans">
            <Grid templateRows="1fr 3fr 1fr" height="100VH">
                <Header />
                <Box>
                    <Flex paddingTop="50px" alignItems="center" justifyContent="center" flexDirection="column">
                        <Text fontSize="16px" lineHeight="19px" fontWeight="400">
                            Welcome to Future Plans category of Advanced Engineering performance form! HERE WE NEED ADD
                            SOME TEXT FOR DESCRIPTION AND ONBOARDING
                        </Text>
                    </Flex>
                </Box>
                <Footer />
            </Grid>
        </div>
    )
}

export default FuturePlans
