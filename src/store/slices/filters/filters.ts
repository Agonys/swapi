import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filtersInitialState } from "./filtersInitialState";
import { FiltersPayload } from "./filters.types";

const filters = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    toggleFilter(state, { payload }: PayloadAction<FiltersPayload>) {
      const isFilterOnList = state.filters[payload.filterType].find(
        (filter) => filter === payload.filterEntry,
      );

      if (isFilterOnList) {
        state.filters[payload.filterType] = state.filters[payload.filterType].filter(
          (filter) => filter !== payload.filterEntry,
        );
      } else {
        state.filters[payload.filterType].push(payload.filterEntry);
      }
    },
  },
});

export const { setSearchValue, toggleFilter } = filters.actions;

export default filters.reducer;
