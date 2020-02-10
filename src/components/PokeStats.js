import React from 'react'
import { getPokemon } from '../services/pokedex'

class PokeStats extends React.Component {
  constructor () {
    super()
    this.state = { pokemon: {} }
  }

  async componentDidMount () {
    const { match: { params: { name } = {} } = {}, pokemon } = this.props
    const pokemonInfo = await getPokemon(name || pokemon)
    this.setState({ pokemon: pokemonInfo })
  }

  render () {
    const { pokemon } = this.state
    return (
      <div>
        <div>Name: <span>{pokemon.name}</span></div>
        <img src={pokemon.sprites && pokemon.sprites.front_default} alt='sprite' />
      </div>
    )
  }
}

export default PokeStats
