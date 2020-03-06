import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  console.log(JSON.stringify(getByText))

  const linkElement = getByText(/Pokémon for Senpai/i)
  expect(linkElement).toBeInTheDocument()
});
