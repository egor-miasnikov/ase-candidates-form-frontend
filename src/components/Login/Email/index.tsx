import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react'
import { firebase } from '../../Firebase'
import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, PseudoBox, Text } from '@chakra-ui/core'
import eye from '../../../images/eye.svg'
import eyeOff from '../../../images/eye-off.svg'

const Email = ({ setIsLogin }: Record<any, any>) => {
    const initErrorState = {
        user: { isUserInvalid: false, userErrorText: '' },
        pass: { isPassInvalid: false, passErrorText: '' },
    }
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passError, setPassError] = useState(initErrorState.pass)
    const [userError, setUserError] = useState(initErrorState.user)
    const handleLogin = () => {
        setPassError(initErrorState.pass)
        setUserError(initErrorState.user)
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((result) => {
                setIsLogin(true)
            })
            .catch(function ({ code }) {
                const errors = {
                    invalidEmail: 'auth/invalid-email',
                    invalidPass: 'auth/wrong-password',
                    noUser: 'auth/user-not-found',
                }
                if (code === errors.invalidEmail) {
                    setUserError({ isUserInvalid: true, userErrorText: 'Email must to be correct' })
                } else if (code === errors.noUser) {
                    setUserError({ isUserInvalid: true, userErrorText: 'Wrong password' })
                } else if (code === errors.invalidPass) {
                    setPassError({ isPassInvalid: true, passErrorText: 'User not found' })
                }
                console.log(code)
            })
    }

    const checkEnterKey = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    }
    return (
        <Box marginTop="32px">
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    h="560px"
                    w="559px"
                    border="1px solid #E2E8F0"
                    borderRadius="4px"
                >
                    <Box marginTop="40px" h="65px">
                        <InputGroup>
                            <Input
                                placeholder={'Email'}
                                onChange={(e: FormEvent | ChangeEvent<any>) => setUsername(e.target.value)}
                                h="48px"
                                w="306px"
                                color="#0A1010"
                                errorBorderColor="#E74424"
                                isInvalid={userError.isUserInvalid}
                            />
                        </InputGroup>
                        {userError.isUserInvalid && (
                            <Text marginTop="4px" color="#E74424" fontSize="11px" lineHeight="13px">
                                {userError.userErrorText}
                            </Text>
                        )}
                    </Box>

                    <Box marginTop="32px" h="65px">
                        <InputGroup>
                            <Input
                                pr="4.5rem"
                                type={show ? 'text' : 'password'}
                                placeholder={'Password'}
                                onChange={(e: FormEvent | ChangeEvent<any>) => setPassword(e.target.value)}
                                onKeyDown={checkEnterKey}
                                w="306px"
                                h="48px"
                                color="#0A1010"
                                errorBorderColor="#E74424"
                                isInvalid={passError.isPassInvalid}
                            />
                            <InputRightElement top="4px" right="12px">
                                <PseudoBox onClick={() => setShow(!show)}>
                                    {show ? (
                                        <Image alt="" h="16px" w="16px" src={eye} />
                                    ) : (
                                        <Image alt="" h="16px" w="16px" src={eyeOff} />
                                    )}
                                </PseudoBox>
                            </InputRightElement>
                        </InputGroup>
                        {passError.isPassInvalid && (
                            <Text marginTop="4px" color="#E74424" fontSize="11px" lineHeight="13px">
                                {passError.passErrorText}
                            </Text>
                        )}
                    </Box>

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
                        <Text color="white">{'Login'}</Text>
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Email
