import { FiltersState } from "./filters.types";

export const filtersInitialState: FiltersState = {
  searchValue: "",
  filters: {
    films: [],
    homeworlds: [],
  },
};
