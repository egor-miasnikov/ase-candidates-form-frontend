import { Categories, getVector, SubCategories, Vector as VectorInterface } from '../Services'
import React, { ChangeEvent, useState, useEffect } from 'react'
import { Box, Divider, Flex, InputGroup, Text, Textarea, InputRightElement, Icon } from '@chakra-ui/core'

const Vector = ({ vectorName }: Record<any, any>) => {
    const initSubCategories: SubCategories[] = [{ title: '', placeholder: '', stateName: '', AseLevel: 0 }]
    const initCategoriesState: Categories[] = [{ title: '', subCategories: initSubCategories }]
    const initVectorState: VectorInterface = { title: '', categories: initCategoriesState }

    const [vector, setVector] = useState(initVectorState)
    const [isVector, setIsVector] = useState(false)
    const [state, setState] = React.useState({})
    useEffect(() => {
        ;(async function f() {
            const vectorData = await getVector(vectorName)

            if (vectorData === null) {
                return {}
            }
            console.log(JSON.stringify(vectorData))
            setVector(vectorData)
            setIsVector(true)
        })()
    }, [vectorName])

    useEffect(() => {
        const initState: Record<string, any> = {}
        for (const category of vector.categories) {
            for (const subCategory of category.subCategories) {
                initState[subCategory.stateName] = ''
            }
        }
        setState(initState)
    }, [vector.categories])

    const handleInputChange = (stateName: string) => (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const localState: Record<string, any> = {}
        localState[stateName] = inputValue
        setState({ ...state, ...localState })
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
                            <Text fontSize="20px" lineHeight="19px" fontWeight="500">
                                {subCategory.title}
                            </Text>
                            <InputGroup marginTop="12px">
                                <Textarea
                                    placeholder={subCategory.placeholder}
                                    onChange={handleInputChange(subCategory.stateName)}
                                    size="sm"
                                    resize="vertical"
                                />
                                //@ts-ignore
                                {state[subCategory.stateName] === '' ? null : (
                                    <InputRightElement children={<Icon name="check" color="green.500" />} />
                                )}
                            </InputGroup>
                            {console.log(state)}
                        </Box>
                    ))}
                </Flex>
                <Divider marginTop="32px" />
            </Box>
        ))
    }

    return (
        <div className="Vector">
            {isVector ? (
                <Box>
                    <Flex marginTop="50px" alignItems="stretch" flexDirection="column">
                        <Text fontSize="16px" lineHeight="19px" fontWeight="400">
                            {vector.title}
                        </Text>
                    </Flex>
                    {getCategoryList()}
                </Box>
            ) : null}
        </div>
    )
}

export default Vector
