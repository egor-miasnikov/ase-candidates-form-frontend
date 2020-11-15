import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Header from '../Header'
import Vector from '../Vector'

function DevelopmentExperience() {
    const vectorName = 'DevelopmentExperience'
    return (
        <Box>
            <Grid templateRows="1fr 1fr 3fr" height="100VH">
                <Header />
                <Vector vectorName={vectorName} />
            </Grid>
        </Box>
    )
}

export default DevelopmentExperience
