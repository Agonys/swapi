import { FilmsState } from "./films.types";

export const filmsInitialState: FilmsState = {
  fetch: {
    isLoading: true,
    error: null,
  },
  filmsList: [],
  filmsCount: 0,
};
