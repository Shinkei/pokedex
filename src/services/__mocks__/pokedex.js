import { readFileSync } from "fs";
import { resolve } from "path";

const getPokemon = async pokemon => {
  const data = readFileSync(
    resolve(__dirname, `../__data__/${pokemon}.json`),
    "utf-8"
  );
  return JSON.parse(data);
};

export { getPokemon };
