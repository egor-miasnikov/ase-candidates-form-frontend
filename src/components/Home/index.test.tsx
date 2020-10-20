import React from 'react'
import { render } from '@testing-library/react'
import Home from './index'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders welcome words', () => {
    const { getByText } = render(
        <Router>
            <Home />
        </Router>
    )
    const textElement = getByText(/Hello and welcome to Advanced Engineering performance form!/i)
    expect(textElement).toBeInTheDocument()
})
