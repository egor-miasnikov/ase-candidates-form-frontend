import React from 'react'
import { render } from '@testing-library/react'
import ExpertiseSharing from './index'

test('renders welcome words', () => {
    const { getByText } = render(<ExpertiseSharing />)
    const textElement = getByText(/Welcome to Expertise Sharing category of Advanced Engineering performance form!/i)
    expect(textElement).toBeInTheDocument()
})
