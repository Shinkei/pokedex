import React from "react";
import { render } from "@testing-library/react";
import PokeStats from "./PokeStats";

jest.mock("../services/pokedex.js");

describe("PokeStats", () => {
  it("Should render stats for Bulbasaur properly", () => {
    const pokestats = render(<PokeStats pokemon="bulbasaur" />);
    expect(pokestats).toMatchSnapshot();
    const { container } = pokestats;

    const table = container.querySelector(".nes-table");
    const tr = table.querySelectorAll("tr");
    const td = table.querySelectorAll("td");

    expect(container).toContainElement(table);
    expect(tr.length).toBe(5);
    expect(td.length).toBe(11);

    expect(td[0]).toHaveTextContent("Name");
    expect(td[1]).toHaveTextContent("bulbasaur");

    expect(td[3]).toHaveTextContent("Abilities");
    expect(td[4]).toHaveTextContent(/chlorophyll/);
  });
});
