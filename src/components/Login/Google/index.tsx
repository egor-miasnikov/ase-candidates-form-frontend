import { auth, firebase } from '../../Firebase'
import { getUserInfo, User, userSignUp } from '../../Services'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/core'
import React from 'react'
import GoogleIcon from '../../../images/google.svg'

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
        <Box className="Google" width="400px">
            <Flex justifyContent="center" alignItems="center">
                <Text fontSize="48px" lineHeight="57px" letterSpacing="0.8px" fontWeight="600">
                    Welcome!
                </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center" marginTop="16px">
                <Text fontSize="18px" lineHeight="32px" letterSpacing="0.2px">
                    Log in with your Google account to fill the form. Good luck!
                </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center" flexDirection="row">
                <Button
                    onClick={handleLogin}
                    w="400px"
                    marginTop="64px"
                    h="56px"
                    border="1px solid #414042"
                    borderRadius="4px"
                    backgroundColor="#414042"
                    _hover={{ backgroundColor: '#414042' }}
                >
                    <Image height="24px" width="24px" src={GoogleIcon} />
                    <Text
                        color="white"
                        marginLeft="10px"
                        fontSize="18px"
                        lineHeight="32px"
                        letterSpacing="0.2px"
                        fontWeight="600"
                    >
                        {'Login via Google'}
                    </Text>
                </Button>
            </Flex>
        </Box>
    )
}

export default Google
