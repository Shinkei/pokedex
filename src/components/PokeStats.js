import React from "react";
import { getPokemon } from "../services/pokedex";

class PokeStats extends React.Component {
  constructor() {
    super();
    this.state = { pokemon: {} };
  }

  async componentDidMount() {
    const { match: { params: { name } = {} } = {}, pokemon } = this.props;
    const pokemonInfo = await getPokemon(name || pokemon);
    this.setState({ pokemon: pokemonInfo });
    this.getAbilityList = this.getAbilityList.bind(this);
  }

  getAbilityList(pokemon) {
    let abilities = [];
    if (pokemon.abilities) {
      pokemon.abilities.forEach(item => {
        abilities.push(<li key={item.ability.name}>{item.ability.name}</li>);
      });
    }
    return abilities;
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div>
        <div className="nes-table-responsive">
          <table className="nes-table is-bordered">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{pokemon.name}</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>
                  <ul className="nes-list is-disc">
                    {this.getAbilityList(pokemon)}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PokeStats;
