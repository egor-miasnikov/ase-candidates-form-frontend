import React from 'react'
import './index.css'
import { Box, Grid } from '@chakra-ui/core'
import Header from '../Header'
import Footer from '../Footer'
import Vector from '../Vector'

function DevelopmentExperience() {
    const vectorName = 'DevelopmentExperience'
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

export default DevelopmentExperience
