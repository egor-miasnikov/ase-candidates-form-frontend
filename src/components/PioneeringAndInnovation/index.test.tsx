import React from 'react'
import { render } from '@testing-library/react'
import PioneeringAndInnovation from './index'

test('renders welcome words', () => {
    const { getByText } = render(<PioneeringAndInnovation />)
    const textElement = getByText(
        /Welcome to Pioneering and Innovation category of Advanced Engineering performance form!/i
    )
    expect(textElement).toBeInTheDocument()
})
