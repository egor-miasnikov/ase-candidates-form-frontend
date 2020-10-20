import React from 'react'
import { render } from '@testing-library/react'
import Footer from './index'

test('renders welcome words', () => {
    const { getByText } = render(<Footer />)
    const textElement = getByText(/Powered by EPAM/i)
    expect(textElement).toBeInTheDocument()
})
