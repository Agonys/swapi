import React, { useState } from "react";
import movies from "dummyData/movies";
import planets from "dummyData/planets";

import Icon from "components/Icon/Icon";
import ScrollableFiltersList from "components/ScrollableFiltersList/ScrollableFiltersList";
import {
  FiltersWrapper,
  FilterLabel,
  FiltersOuterContainer,
  FiltersInnerContainer,
} from "./Filters.styles";
import { useLocation } from "react-router-dom";

const Filters: React.FC = () => {
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
          <ScrollableFiltersList
            header="Homeworld"
            filtersList={planets.map(({ name }) => ({ name }))}
          />
          <ScrollableFiltersList
            header="Movie"
            filtersList={movies.map(({ title }) => ({ name: title }))}
          />
        </FiltersInnerContainer>
      </FiltersOuterContainer>
    </FiltersWrapper>
  );
};

export default Filters;
