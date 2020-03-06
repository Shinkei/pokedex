import React from 'react'
import { render } from '@testing-library/react'
import PokeStats from './PokeHeader'

describe('PokeHeader', () => {
  /**
   * React Unit test example
   * the testing library helps to render the components and then, the test gets the img element
   * and check if the element is inside the rendered component
   */
  it('should have class nes-container', () => {
    const { container } = render(<PokeStats />)

    const divElement = container.querySelector('header')
    expect(divElement).toHaveClass('nes-container')
  })
})
