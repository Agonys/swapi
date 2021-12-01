import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filmsInitialState } from "./filmsInitialState";
import { IGetAllFilmsResponse } from "types/graphql";

const films = createSlice({
  name: "films",
  initialState: filmsInitialState,
  reducers: {
    setFilms: (state, { payload }: PayloadAction<IGetAllFilmsResponse>) => {
      state.filmsCount = payload.totalCount;
      state.filmsList = payload.films;
      state.fetch.isLoading = false;
    },
    setFilmsError: (state, { payload }: PayloadAction<string>) => {
      state.fetch.isLoading = false;
      state.fetch.error = payload;
    },
    clearError: (state) => {
      state.fetch.error = null;
    },
  },
});

export const { setFilms, setFilmsError, clearError } = films.actions;

export default films.reducer;
