import React from 'react'
import { render } from '@testing-library/react'
import DevelopmentExperience from './index'

test('renders welcome words', () => {
    const { getByText } = render(<DevelopmentExperience />)
    const textElement = getByText(/Powered by EPAM/i)
    expect(textElement).toBeInTheDocument()
})
