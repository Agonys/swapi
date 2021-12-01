import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "store/store";

import { filterType } from "types/redux";

import Icon from "components/Icon/Icon";
import CircularLoader from "components/CircularLoader/CircularLoader";
import ScrollableFiltersList from "components/ScrollableFiltersList/ScrollableFiltersList";
import {
  FiltersWrapper,
  FilterLabel,
  FiltersOuterContainer,
  FiltersInnerContainer,
} from "./Filters.styles";

const Filters: React.FC = () => {
  const {
    planetsList,
    fetch: { isLoading: isPlanetsListLoading },
  } = useAppSelector((state) => state.planets);
  const {
    filmsList,
    fetch: { isLoading: isFilmsListLoading },
  } = useAppSelector((state) => state.films);
  const { films, homeworlds } = useAppSelector((state) => state.filters.filters);

  const { pathname } = useLocation();
  const [areFiltersOpen, setFiltersOpen] = useState(pathname === "/");

  return (
    <FiltersWrapper>
      <FilterLabel
        areFiltersOpen={areFiltersOpen}
        onClick={() => setFiltersOpen((prevState) => !prevState)}
      >
        Filters <Icon name="Chevron" rotate={areFiltersOpen} />
      </FilterLabel>

      <FiltersOuterContainer areFiltersOpen={areFiltersOpen}>
        <FiltersInnerContainer>
          {isPlanetsListLoading ? (
            <>
              <CircularLoader description="loading planets data..." />
            </>
          ) : (
            <ScrollableFiltersList
              header="Homeworld"
              filtersList={planetsList.map(({ name }) => ({ name }))}
              filterType={filterType.HOMEWORLDS}
              filtersActive={homeworlds}
            />
          )}
          {isFilmsListLoading ? (
            <>
              <CircularLoader description="loading films data..." />
            </>
          ) : (
            <ScrollableFiltersList
              header="Film"
              filtersList={filmsList.map(({ title }) => ({ name: title }))}
              filterType={filterType.FILMS}
              filtersActive={films}
            />
          )}
        </FiltersInnerContainer>
      </FiltersOuterContainer>
    </FiltersWrapper>
  );
};

export default Filters;
