import React from 'react'
import { Box, Grid } from '@chakra-ui/core'
import Header from '../Header'
import Vector from '../Vector'
const FuturePlans = () => {
    const vectorName = 'FuturePlans'
    return (
        <Box>
            <Grid templateRows="1fr 1fr 3fr" height="100VH">
                <Header />
                <Vector vectorName={vectorName} />
            </Grid>
        </Box>
    )
}

export default FuturePlans
