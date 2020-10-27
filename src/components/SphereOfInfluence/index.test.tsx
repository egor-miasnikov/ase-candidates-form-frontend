import React from 'react'
import { render } from '@testing-library/react'
import SphereOfInfluence from './index'

test('renders welcome words', () => {
    const { getByText } = render(<SphereOfInfluence />)
    const textElement = getByText(/Powered by EPAM/i)
    expect(textElement).toBeInTheDocument()
})
