import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPokemon } from '../services/pokedex'

class PokeList extends React.Component {
  constructor () {
    super()
    this.state = { pokemons: [] }
  }

  async componentDidMount () {
    const pokemons = await getAllPokemon()
    this.setState({
      pokemons: pokemons.results
    })
  }

  render() {
    const { pokemons } = this.state
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pokemons.map((p, i) => <Link to={`/pokemon/${p.name}`} key={i}>{p.name}</Link>)}
      </div>
    )
  }
}

export default PokeList
