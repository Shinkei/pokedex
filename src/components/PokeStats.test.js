import React from 'react'
import { render } from '@testing-library/react'
import PokeStats from './PokeStats'

describe('PokeStats', () => {

  it('should render an image', () => {
    const { getByText, getByRole } = render(<PokeStats pokemon='bulbasaur' />)
    const pokemonImage = getByRole('img')
    expect(pokemonImage).toBeInTheDocument()
    
  })
})