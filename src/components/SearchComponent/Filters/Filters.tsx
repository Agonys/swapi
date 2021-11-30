import React, { useState } from "react";
import dummyFiltersList from "./dummyFiltersList";

import Icon from "components/Icon/Icon";
import ScrollableFiltersList from "components/ScrollableFiltersList/ScrollableFiltersList";
import {
  FiltersWrapper,
  FilterLabel,
  FiltersOuterContainer,
  FiltersInnerContainer,
} from "./Filters.styles";

const Filters: React.FC = () => {
  const [areFiltersOpen, setFiltersOpen] = useState(false);

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
          <ScrollableFiltersList header="Homeworld" filtersList={dummyFiltersList} />
          <ScrollableFiltersList header="Movie" filtersList={dummyFiltersList} />
        </FiltersInnerContainer>
      </FiltersOuterContainer>
    </FiltersWrapper>
  );
};

export default Filters;
