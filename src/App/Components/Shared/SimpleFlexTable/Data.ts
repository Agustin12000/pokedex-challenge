import { pokemonListWithDetails } from "../../../Assets/Test/Data/Pokemon.data";
import { language as lang } from "../../../Config/Lang/Lang.language";
import { generateDetailsConfig } from "../../../Pages/Pokemon/Details/Config";

export const pokemonSelected = pokemonListWithDetails[0];
const language = lang.ES;

export const configParams = {
  language,
  pokemon: { ...pokemonSelected, description: "one description" },
};

export const configModeDetails = generateDetailsConfig({
  ...configParams,
  lang: "ES",
});
