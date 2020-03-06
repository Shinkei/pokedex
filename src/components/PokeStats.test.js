import React from 'react'
import { render } from '@testing-library/react'
import PokeStats from './PokeStats'

describe('PokeStats', () => {

  it('should render an image', () => {
    const { getByRole } = render(<PokeStats pokemon='bulbasaur' />)
    const pokemonImage = getByRole('img')
    expect(pokemonImage).toBeInTheDocument()
  })

  it('should look like always', () => {
    const container = render(<PokeStats pokemon='bulbasaur' />)
    expect(container).toMatchSnapshot()
  })
})
