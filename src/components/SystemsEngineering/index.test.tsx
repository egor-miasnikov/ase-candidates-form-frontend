import React from 'react'
import { render } from '@testing-library/react'
import SystemsEngineering from './index'

test('renders welcome words', () => {
    const { getByText } = render(<SystemsEngineering />)
    const textElement = getByText(/Powered by EPAM/i)
    expect(textElement).toBeInTheDocument()
})
