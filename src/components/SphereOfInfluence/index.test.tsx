import React from 'react'
import { render } from '@testing-library/react'
import SphereOfInfluence from './index'

test('renders welcome words', () => {
    const { getByText } = render(<SphereOfInfluence />)
    const textElement = getByText(/Welcome to Sphere of Influence category of Advanced Engineering performance form!/i)
    expect(textElement).toBeInTheDocument()
})
