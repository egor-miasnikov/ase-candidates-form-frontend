import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Text } from '@chakra-ui/core'
import Header from '../Header'
const Home = () => {
    const formCategories = [
        {
            title: 'Development Experience and Knowledge',
            route: '/development-experience',
            color: '#B1A0C7',
        },
        {
            title: 'Sphere of Influence',
            route: '/sphere-of-influence',
            color: '#FFD966',
        },
        {
            title: 'Systems Engineering and Systems Thinking',
            route: '/systems-engineering',
            color: '#8DB4E2',
        },
        {
            title: 'Expertise Sharing',
            route: '/expertise-sharing',
            color: '#76933C',
        },
        {
            title: 'Pioneering and Innovation',
            route: '/pioneering-and-innovation',
            color: '#31869B',
        },
        {
            title: 'Future Plans',
            route: '/future-plans',
            color: 'blue.500',
        },
    ]

    const itemList = formCategories.map((category, index) => (
        <Link key={index} to={category.route}>
            <Flex align="center">
                <Flex align="center" justify="center" w="100%" h="150px" bg={category.color} paddingX="30px">
                    <Text textAlign="center" fontSize="16px" lineHeight="19px" fontWeight="400" color="white">
                        {category.title}
                    </Text>
                </Flex>
            </Flex>
        </Link>
    ))
    return (
        <Box>
            <Grid templateRows="1fr 3fr">
                <Header />
                <Box>
                    <Flex paddingTop="50px" alignItems="center" justifyContent="center" flexDirection="column">
                        <Text fontSize="16px" lineHeight="19px" fontWeight="400">
                            Hello and welcome to Advanced Engineering performance form! HERE WE NEED ADD SOME TEXT FOR
                            DESCRIPTION AND ONBOARDING
                        </Text>
                        <Grid marginTop="50px" templateColumns="repeat(3, 1fr)" gap={6}>
                            {itemList}
                        </Grid>
                    </Flex>
                </Box>
            </Grid>
        </Box>
    )
}

export default Home
