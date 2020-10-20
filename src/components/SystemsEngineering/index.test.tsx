import React from 'react'
import { render } from '@testing-library/react'
import SystemsEngineering from './index'

test('renders welcome words', () => {
    const { getByText } = render(<SystemsEngineering />)
    const textElement = getByText(
        /Welcome to Systems Engineering and Systems Thinking category of Advanced Engineering performance form!/i
    )
    expect(textElement).toBeInTheDocument()
})
