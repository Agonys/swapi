import React from "react";

import { SearchContainer } from "./SearchComponent.styles";
import Search from "./Search/Search";
import Filters from "./Filters/Filters";

const SearchComponent: React.FC = () => {
  return (
    <SearchContainer>
      <p>Search through your intergalactic database to find your hero...</p>
      <Search />
      <Filters />
    </SearchContainer>
  );
};

export default SearchComponent;
