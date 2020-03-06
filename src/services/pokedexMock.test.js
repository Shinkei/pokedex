import { getAllPokemon } from "./pokedex";

describe("pokedex", () => {
  /**
   * Mocked object used as response
   */
  const jsonPromise = Promise.resolve({
    count: 964,
    results: new Array(20)
  });

  /**
   * Mocked function
   * the purpose of this mock is to mock the fetch function, so when the service to get all Pokemon is called,
   * it will used the mocked one, this way it is posible to test the services functionality
   */
  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.resolve({
      json: () => jsonPromise
    });
  });

  let response = null;

  /**
   * The beforeEach funtion will be execited everytime before each test
   */
  beforeEach(async () => {
    response = await getAllPokemon();
  });

  it("should fetch 20 pokemon", async () => {
    expect(response.results).toHaveLength(20);
  });

  it("should fetch total number of pokemon", async () => {
    console.log(response);
    expect(response.count).toBe(964);
  });
});
