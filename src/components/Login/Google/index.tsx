import { auth, firebase } from '../../Firebase'
import { getUserInfo, User, userSignUp } from '../../Services'
import { Box, Button, Flex, Text } from '@chakra-ui/core'
import React from 'react'

const Google = ({ setIsLogin }: Record<any, any>) => {
    async function handleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider()
        const result: firebase.auth.UserCredential = await auth.signInWithPopup(provider)
        const { user } = result
        const storedUser = await getUserInfo(user?.uid!)

        if (storedUser === null) {
            await userSignUp(result.user?.uid!, {
                displayName: user?.displayName,
                email: user?.email,
            } as User)
        }

        setIsLogin(true)
    }

    return (
        <div className="Google">
            <Box marginTop="32px">
                <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    flexDirection="row"
                    h="560px"
                    w="559px"
                    border="1px solid #E2E8F0"
                    borderRadius="4px"
                >
                    <Button
                        onClick={handleLogin}
                        w="306px"
                        marginTop="80px"
                        h="48px"
                        border="1px solid #81B6B2"
                        borderRadius="4px"
                        backgroundColor="#81B6B2"
                        _hover={{ backgroundColor: '#5A9794' }}
                    >
                        <Text color="white">{'Login via Google'}</Text>
                    </Button>
                </Flex>
            </Box>
        </div>
    )
}

export default Google
