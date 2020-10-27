import React from 'react'
import { render } from '@testing-library/react'
import PioneeringAndInnovation from './index'

test('renders welcome words', () => {
    const { getByText } = render(<PioneeringAndInnovation />)
    const textElement = getByText(/Powered by EPAM/i)
    expect(textElement).toBeInTheDocument()
})
