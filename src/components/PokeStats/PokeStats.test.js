import React from 'react'
import { render } from '@testing-library/react'
import PokeStats from './PokeStats'

describe('PokeStats', () => {

  /**
   * React Unit test example
   * the testing library helps to render the components and then, the test gets the img element
   * and check if the element is inside the rendered component
   */
  it('should render an image', () => {
    const { getByRole } = render(<PokeStats pokemon='bulbasaur' />)
    const pokemonImage = getByRole('img')
    expect(pokemonImage).toBeInTheDocument()
  })

  /**
   * React snapshot test example
   * The snapshot test is a general test that will save the rendered component and eveytime
   * the component is rendered again, is compared with the snapshot, if it is not exatly as
   * the snapshot, the test fails.
   */
  it('should look like always', () => {
    const container = render(<PokeStats pokemon='bulbasaur' />)
    expect(container).toMatchSnapshot()
  })
})
