import { getAllPokemon } from './pokedex'

describe ('pokedex', () => {
  /**
   * Global variable used in all the test inside this test suit
   */
  let response = null

  /**
   * The beforeAll function will be executed once  before start executing all the test
   * it is a good place to execute something that is shared by all test, like a database connection
   */
  beforeAll(async () => {
    response = await getAllPokemon()
  })

  /**
   * This would be an integration test, it is called the function getAllPokemon
   * and fetch the data from the API, then expect that the response meets certain conditions
   */
  it ('should fetch 20 pokemon', async () => {
    expect(response.results).toHaveLength(20)
  })

  /**
   * Integration test, checking a diferent attribute from the response object
   */
  it ('should fetch total number of pokemon', async () => {
    console.log(response)
    expect(response.count).toBe(964)
  })
})
