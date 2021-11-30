import React, { ChangeEvent, FormEvent, useCallback } from "react";
import debounce from "utils/debounce";

import Icon from "components/Icon/Icon";

import { SearchForm, SearchInput } from "./Search.styles";

const Search: React.FC = () => {
  //dispatch state change for form
  // TODO: We can quit idea of dynamic table changes and do just static fetch after hitting enter / clicking on maginifier
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceStateChange = useCallback(
    debounce((text) => console.log(text), 300),
    [],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    if (targetValue.length) debounceStateChange(targetValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput placeholder="Name of character..." onChange={handleChange} />
      <Icon
        name="Search"
        className="iconStyle"
        onClick={handleSubmit}
        wrapperClassName="iconContainer"
      />
    </SearchForm>
  );
};

export default Search;
