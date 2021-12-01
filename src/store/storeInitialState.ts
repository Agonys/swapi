import { peopleInitialState, filmsInitialState, planetsInitialState } from "./slices";
import { AppState } from "./types";

export const appInitialState: AppState = {
  people: peopleInitialState,
  movies: filmsInitialState,
  planets: planetsInitialState,
};
