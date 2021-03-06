import React, { useMemo } from "react";
import PokemonDetailsContent from "../../../Components/Pokemon/Details/Content";
import PokemonImageDetails from "../../../Components/Pokemon/Details/ImageDetails";
import { useDetails } from "../../../Core/Modules/Pokemon";
import useLanguage from "../../../Core/Hooks/useLanguage";
import { modes, generateButtonModes, generateActionButtons } from "./Config";
import { PokemonDetailsContainer } from "./Details.styled";
import { switchConfigMode } from "./Utils";
import { ButtonProps } from "../../../Components/Shared/Button";

const Details = () => {
  const { language, changeLanguage, lang } = useLanguage();
  const { state, actions } = useDetails();
  const { mode, pokemon } = state;
  const { onChangeMode, onBackToPokemonDetails } = actions;
  const modeButtons = generateButtonModes({ language, onChangeMode, mode });
  const pokemonDetailsFooterButtons = generateActionButtons({
    language,
    onBackToPokemonDetails,
    lang,
    changeLanguage,
  });

  const configMode = useMemo(() => {
    const configParams = {
      language,
      pokemon,
      lang,
    };

    return switchConfigMode({ mode, modes, configParams });
  }, [mode, pokemon, language, lang]);

  return (
    <PokemonDetailsContainer>
      <PokemonDetailsContent
        modeButtons={modeButtons as ButtonProps[]}
        pokemonDetailsFooterButtons={
          pokemonDetailsFooterButtons as ButtonProps[]
        }
        configMode={configMode}
      />
      <PokemonImageDetails pokemon={pokemon} />
    </PokemonDetailsContainer>
  );
};

export default Details;
