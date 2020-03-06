import { getAllPokemon } from "./pokedex";

describe("pokedex", () => {
  const jsonPromise = Promise.resolve({
    count: 964,
    results: new Array(20)
  });

  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.resolve({
      json: () => jsonPromise
    });
  });

  let response = null;

  beforeAll(async () => {
    response = await getAllPokemon();
  });

  it("should fetch 20 pokemon", async () => {
    expect(response.results).toHaveLength(20);
  });

  it("should fetch total number of pokemon", async () => {
    expect(response.count).toBe(964);
  });
});
