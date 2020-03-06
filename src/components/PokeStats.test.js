import React from "react";
import { render } from "@testing-library/react";
import PokeStats from "./PokeStats";

jest.mock("../services/pokedex.js");

describe("PokeStats", () => {
  it("Should render Bulbasaur component", async () => {
    const pokestats = render(<PokeStats pokemon="bulbasaur" />);
    const { waitForNextUpdate, getByText } = pokestats;

    // Necessary for the component to render after fetching API
    await waitForNextUpdate;

    expect(pokestats).toMatchSnapshot();
    const nameElement = getByText("bulbasaur");
    expect(nameElement).toBeInTheDocument();
  });
});
