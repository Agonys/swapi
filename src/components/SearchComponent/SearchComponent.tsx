import React from "react";

import { SearchContainer } from "./SearchComponent.styles";
import Search from "./Search/Search";

const SearchComponent: React.FC = () => {
  return (
    <SearchContainer>
      <p>Search through your intergalactic database to find your hero...</p>
      <Search />
    </SearchContainer>
  );
};

export default SearchComponent;
