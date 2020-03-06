const getAllPokemon = async () => {
  const response = await window.fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data;
};

const getPokemon = async number => {
  const res = await window.fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  const data = await res.json();
  return data;
};

export { getAllPokemon, getPokemon };
