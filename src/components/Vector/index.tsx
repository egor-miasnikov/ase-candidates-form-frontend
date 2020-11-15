import {
    Categories,
    getVector,
    SubCategories,
    Vector as VectorInterface,
    setUserForm,
    getVectorState,
} from '../Services'
import React, { useState, useEffect } from 'react'
import {
    Box,
    Flex,
    InputGroup,
    Text,
    Textarea,
    InputRightElement,
    Icon,
    Button,
    useToast,
    Tooltip,
} from '@chakra-ui/react'
import { Redirect } from 'react-router-dom'

import { QuestionOutlineIcon } from '@chakra-ui/icons'

const Vector = ({ vectorName }: Record<any, any>) => {
    const initSubCategories: SubCategories[] = [{ title: '', placeholder: '', stateName: '', AseLevel: 0 }]
    const initCategoriesState: Categories[] = [{ title: '', subCategories: initSubCategories }]
    const initVectorState: VectorInterface = { title: '', categories: initCategoriesState }

    const [vector, setVector] = useState(initVectorState)
    const [isVector, setIsVector] = useState(false)
    const [isVectorState, setIsVectorState] = useState(false)
    const [vectorState, setVectorState] = useState('')
    const [isBack, setIsBack] = useState(false)
    const [state, setState] = React.useState({})

    const toast = useToast()

    useEffect(() => {
        ;(async function f() {
            const vectorData = await getVector(vectorName)

            if (vectorData === null) {
                return {}
            }

            const vectorState = await getVectorState(vectorName)

            if (vectorState !== null) {
                setIsVectorState(true)
                const savedState = JSON.parse(vectorState)
                setVectorState(savedState)
            }

            setVector(vectorData)
            setIsVector(true)
        })()
    }, [vectorName])

    useEffect(() => {
        if (isVectorState) {
            setState(vectorState)
        } else {
            const initState: Record<string, any> = {}
            for (const category of vector.categories) {
                for (const subCategory of category.subCategories) {
                    initState[subCategory.stateName] = ''
                }
            }
            setState(initState)
        }
    }, [isVectorState, vector.categories, vectorState])

    const handleInputChange = (stateName: string) => (e: any) => {
        const inputValue = e.target.value
        const localState: Record<string, any> = {}
        localState[stateName] = inputValue
        setState({ ...state, ...localState })
    }

    const saveHandler = async () => {
        try {
            await setUserForm(vectorName, state)
            const niceName = vectorName.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            toast({
                position: 'top-right',
                title: 'Form saved',
                description: `We've save your form part for ${niceName}.`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setIsBack(true)
        } catch (e) {
            toast({
                position: 'top-right',
                title: 'An error occurred.',
                description: 'Unable to save form.',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    const getCategoryList = () => {
        return vector.categories.map((category, index) => (
            <Box key={index}>
                <Flex marginTop="32px" alignItems="stretch" flexDirection="column">
                    <Text fontSize="24px" lineHeight="19px" fontWeight="600">
                        {category.title}
                    </Text>
                    {category.subCategories.map((subCategory: SubCategories, index) => (
                        <Box marginTop="24px" key={index}>
                            <Text fontSize="20px" lineHeight="19px" fontWeight="500" margingRigth="15px">
                                {`${subCategory.title} `}
                                <Tooltip label={subCategory.placeholder} fontSize="md" aria-label="A tooltip">
                                    <QuestionOutlineIcon />
                                </Tooltip>
                            </Text>

                            <InputGroup marginTop="12px">
                                <Textarea
                                    placeholder={subCategory.placeholder}
                                    onChange={handleInputChange(subCategory.stateName)}
                                    size="sm"
                                    resize="vertical"
                                    // @ts-ignore
                                    value={state[subCategory.stateName]}
                                />

                                {
                                    // @ts-ignore
                                    state[subCategory.stateName] === '' ? null : (
                                        <InputRightElement children={<Icon name="check" color="green.500" />} />
                                    )
                                }
                            </InputGroup>
                        </Box>
                    ))}
                </Flex>
            </Box>
        ))
    }

    return (
        <Box marginLeft="120px">
            {isVector ? (
                <Box>
                    <Flex marginTop="50px" alignItems="stretch" flexDirection="column">
                        <Text fontSize="18px" lineHeight="32px" fontWeight="400" letterSpacing="0.2px">
                            {vector.title}
                        </Text>
                    </Flex>
                    {getCategoryList()}
                    <Box marginY="40px">
                        <Button
                            onClick={() => setIsBack(true)}
                            background="#414042"
                            h="56px"
                            w="144px"
                            border="1px solid #414042"
                            _hover={{ backgroundColor: '#414042' }}
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
                                Back
                            </Text>
                        </Button>
                        <Button
                            marginLeft="24px"
                            background="#414042"
                            h="56px"
                            w="144px"
                            border="1px solid #414042"
                            _hover={{ backgroundColor: '#414042' }}
                            onClick={saveHandler}
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
                                Save
                            </Text>
                        </Button>
                    </Box>
                </Box>
            ) : null}
            {isBack && <Redirect to="/" />}
        </Box>
    )
}

export default Vector
