import React from 'react'
import { getPokemon } from '../services/pokedex'

class PokeStats extends React.Component {
  constructor () {
    super()
    this.powerEmojis = {
      normal: '😐',
      fighting: '🥊',
      flying: '✈️',
      poison: '💀',
      ground: '🌍',
      rock: '🗿',
      bug: '🐞',
      ghost: '👻',
      steel: '🔩',
      fire: '🔥',
      water: '💧',
      grass: '🍃',
      electric: '⚡',
      psychic: '👁️‍🗨️',
      ice: '🌨️',
      dragon: '🐉',
      dark: '🌚',
      fairy: '🧚'
    }
    this.state = { pokemon: {} }
  }

  async componentDidMount () {
    const { match: { params: { name } = {} } = {}, pokemon } = this.props
    const pokemonInfo = await getPokemon(name || pokemon)
    this.setState({ pokemon: pokemonInfo })
    this.getAbilityList = this.getAbilityList.bind(this)
    this.getTypes = this.getTypes.bind(this)
  }

  getAbilityList (pokemon) {
    const abilities = []
    if (pokemon.abilities) {
      pokemon.abilities.forEach(item => {
        abilities.push(<div key={item.ability.name}>{item.ability.name}</div>)
      })
    }
    return abilities
  }

  getTypes (pokemon) {
    const types = []
    if (pokemon.types) {
      pokemon.types.forEach(item => {
        types.push(
          <div className='power-emojis' key={item.type.name}>
            {this.powerEmojis[item.type.name]}
          </div>
        )
      })
    }
    return types
  }

  render () {
    const { pokemon } = this.state
    return (
      <div>
        <div className='nes-table-responsive' style={{ display: 'flex', justifyContent: 'center' }}>
          <table className='nes-table is-bordered'>
            <tbody>
              <tr>
                <td>Name</td>
                <td style={{ borderRightWidth: 0 }}>{pokemon.name}</td>
                <td rowSpan='5' style={{ borderBottomWidth: 0, borderLeftWidth: 4 }}>
                  <img
                    src={pokemon.sprites && pokemon.sprites.front_default}
                    alt='pokeimage'
                  />
                </td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>{this.getAbilityList(pokemon)}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{pokemon.height}m</td>
              </tr>
              <tr>
                <td>Types</td>
                <td>{this.getTypes(pokemon)}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{pokemon.weight}kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default PokeStats
