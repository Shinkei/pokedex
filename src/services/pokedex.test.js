import { getAllPokemon } from './pokedex'

describe ('pokedex', () => {
  let response = null

  beforeAll(async () => {
    response = await getAllPokemon()
  })

  it ('should fetch 20 pokemon', async () => {
    expect(response.results).toHaveLength(20)
  })

  it ('should fetch total number of pokemon', async () => {
    console.log(response)
    expect(response.count).toBe(964)
  })
})
