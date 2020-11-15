import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Text, Button, useToast } from '@chakra-ui/react'
import Header from '../Header'
const Home = () => {
    const formCategories = [
        {
            title: 'Development Experience and Knowledge',
            route: '/development-experience',
        },
        {
            title: 'Sphere of Influence',
            route: '/sphere-of-influence',
        },
        {
            title: 'Systems Engineering and Systems Thinking',
            route: '/systems-engineering',
        },
        {
            title: 'Expertise Sharing',
            route: '/expertise-sharing',
        },
        {
            title: 'Pioneering and Innovation',
            route: '/pioneering-and-innovation',
        },
        {
            title: 'Future Plans',
            route: '/future-plans',
        },
    ]

    const toast = useToast()
    const itemList = formCategories.map((category, index) => (
        <Link key={index} to={category.route}>
            <Flex align="center">
                <Flex align="center" justify="center" w="100%" h="160px" bg="#FFF2CF" paddingX="60px">
                    <Text textAlign="center" fontSize="18px" lineHeight="32px" fontWeight="400" color="#0B0B0B">
                        {category.title}
                    </Text>
                </Flex>
            </Flex>
        </Link>
    ))

    function publishHandler() {
        toast({
            position: 'top-right',
            title: 'Form published',
            description: `We've publish your form for committee.`,
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }
    return (
        <Grid templateRows="1fr 3fr" height="100vh">
            <Header />
            <Box marginLeft="120px">
                <Text fontSize="16px" lineHeight="32px" fontWeight="400" letterSpacing="0.2px">
                    Industry has changed and EPAM has changed as well. Our new complex engagements require us to build
                    solutions cross different platforms and ecosystems where Advanced Software Engineers should step in.
                    To reflect the challenges we've created new engineering track - Advanced Software Engineering (ASE)
                </Text>

                <Box marginTop="40px">
                    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                        {itemList}
                    </Grid>
                </Box>
                <Box marginTop="80px">
                    <Grid templateColumns="3fr 3fr 3fr">
                        <Box />
                        <Flex justify="center">
                            <Button
                                w="100%"
                                background="#414042"
                                h="56px"
                                border="1px solid #414042"
                                _hover={{ backgroundColor: '#414042' }}
                                onClick={publishHandler}
                            >
                                <Text
                                    fontSize="18px"
                                    lineHeight="32px"
                                    letterSpacing="0.2px"
                                    fontWeight="600"
                                    fontFamily="Roboto Bold"
                                    textAlign="center"
                                    color="#FFFFFF"
                                >
                                    Confirm and Publish
                                </Text>
                            </Button>
                        </Flex>
                        <Box />
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}

export default Home
