import React from "react";
import { render } from "@testing-library/react";
import PokeStats from "./PokeStats";

jest.mock("../../services/pokedex.js");

describe("PokeStats", () => {
  /**
   * React snapshot test example
   * The snapshot test is a general test that will save the rendered component and eveytime
   * the component is rendered again, is compared with the snapshot, if it is not exatly as
   * the snapshot, the test fails.
   */
  it("Should render Bulbasaur component", async () => {
    const pokestats = render(<PokeStats pokemon="bulbasaur" />);
    const { waitForNextUpdate, getByText } = pokestats;

    // Necessary for the component to render after fetching API
    await waitForNextUpdate;

    expect(pokestats).toMatchSnapshot();
    const nameElement = getByText("bulbasaur");
    expect(nameElement).toBeInTheDocument();

    const greenPowerElement = getByText("🍃");
    expect(greenPowerElement).toBeInTheDocument();
  });

  /**
   * React Unit test example
   * the testing library helps to render the components and then, the test gets the img element
   * and check if the element is inside the rendered component
   */
  it("should render an image", () => {
    const { getByRole } = render(<PokeStats pokemon="bulbasaur" />);
    const pokemonImage = getByRole("img");
    expect(pokemonImage).toBeInTheDocument();
  });
});
