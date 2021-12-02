import React from "react";

import { CharactersListWrapper } from "pages/CharactersList/CharactersList.styles";
import SearchComponent from "components/SearchComponent/SearchComponent";
import CharactersTable from "components/CharactersTable/CharactersTable";

const Favorite: React.FC = () => {
  return (
    <CharactersListWrapper>
      <SearchComponent />
      <CharactersTable isFavorite={true} />
    </CharactersListWrapper>
  );
};

export default Favorite;
