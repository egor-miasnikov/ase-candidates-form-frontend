import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Header from '../Header'
import Vector from '../Vector'
const SphereOfInfluence = () => {
    const vectorName = 'SphereOfInfluence'
    return (
        <Box>
            <Grid templateRows="1fr 1fr 3fr" height="100VH">
                <Header />
                <Vector vectorName={vectorName} />
            </Grid>
        </Box>
    )
}

export default SphereOfInfluence
