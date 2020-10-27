import React from 'react'
import './index.css'
import { Box, Flex, Grid, Text } from '@chakra-ui/core'
import Header from '../Header'
import Footer from '../Footer'
import Vector from '../Vector'
const SystemsEngineering = () => {
    const vectorName = 'SystemsEngineering'
    return (
        <Box>
            <Grid templateRows="1fr 1fr 3fr 1fr" height="100VH">
                <Header />
                <Vector vectorName={vectorName} />
                <Footer />
            </Grid>
        </Box>
    )
}

export default SystemsEngineering
