import React from 'react'
import { Box, Grid } from '@chakra-ui/core'
import Header from '../Header'
import Vector from '../Vector'
const ExpertiseSharing = () => {
    const vectorName = 'ExpertiseSharing'
    return (
        <Box>
            <Grid templateRows="1fr 1fr 3fr" height="100VH">
                <Header />
                <Vector vectorName={vectorName} />
            </Grid>
        </Box>
    )
}

export default ExpertiseSharing
