import React from 'react'
import { render } from '@testing-library/react'
import ExpertiseSharing from './index'

test('renders welcome words', () => {
    const { getByText } = render(<ExpertiseSharing />)
    const textElement = getByText(/Powered by EPAM/i)
    expect(textElement).toBeInTheDocument()
})
