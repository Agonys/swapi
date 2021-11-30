import React from "react";

import { CharactersListWrapper } from "./CharactersList.styles";
import SearchComponent from "components/SearchComponent/SearchComponent";
import CharactersTable from "components/CharactersTable/CharactersTable";

const CharactersList: React.FC = () => {
  return (
    <CharactersListWrapper>
      <SearchComponent />
      <CharactersTable />
    </CharactersListWrapper>
  );
};

export default CharactersList;
