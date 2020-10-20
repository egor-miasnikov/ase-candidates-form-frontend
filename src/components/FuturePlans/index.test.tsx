import React from 'react'
import { render } from '@testing-library/react'
import FuturePlans from './index'

test('renders welcome words', () => {
    const { getByText } = render(<FuturePlans />)
    const textElement = getByText(/Powered by EPAM/i)
    expect(textElement).toBeInTheDocument()
})
