import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('PokeApp', () => {
  const { getByText } = render(<App />)
  console.log(JSON.stringify(getByText))

  const linkElement = getByText(/Pokémon List/i)
  expect(linkElement).toBeInTheDocument()
})
