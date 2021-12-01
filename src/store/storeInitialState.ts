import {
  peopleInitialState,
  filmsInitialState,
  planetsInitialState,
  favoritesInitialState,
  filtersInitialState,
} from "./slices";
import { AppState } from "./types";

export const appInitialState: AppState = {
  people: peopleInitialState,
  movies: filmsInitialState,
  planets: planetsInitialState,
  filters: filtersInitialState,
  favorites: favoritesInitialState,
};
