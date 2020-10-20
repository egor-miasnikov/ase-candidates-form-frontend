import React from 'react'
import { render } from '@testing-library/react'
import DevelopmentExperience from './index'

test('renders welcome words', () => {
    const { getByText } = render(<DevelopmentExperience />)
    const textElement = getByText(
        /Welcome to Development Experience and Knowledge category of Advanced Engineering performance form!/i
    )
    expect(textElement).toBeInTheDocument()
})
