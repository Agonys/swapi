import { filterType } from "types/redux";

export interface FiltersState {
  searchValue: string;
  filters: {
    [key in filterType]: string[];
  };
}

export interface FiltersPayload {
  filterType: filterType;
  filterEntry: string;
}
