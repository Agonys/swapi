import React from "react";

import { SearchForm, SearchInput } from "./Search.styles";

const Search: React.FC = () => {
  return (
    <SearchForm>
      <SearchInput placeholder="Name of character..." />
      {/*<Cancel />*/}
    </SearchForm>
  );
};

export default Search;
