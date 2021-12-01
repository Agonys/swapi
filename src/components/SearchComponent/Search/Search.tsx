import React, { ChangeEvent, FormEvent, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import debounce from "utils/debounce";
import routes from "config/routes";
import { useAppDispatch } from "store/store";
import { setSearchValue } from "store/slices/filters/filters";

import Icon from "components/Icon/Icon";

import { SearchForm, SearchInput } from "./Search.styles";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceStateChange = useCallback(
    debounce((text) => dispatch(setSearchValue(text)), 300),
    [],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    debounceStateChange(targetValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const route = pathname.includes(routes.characters.basic)
      ? routes.characters.basic
      : routes.favorite.basic;
    navigate(`${route}/1`);
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
