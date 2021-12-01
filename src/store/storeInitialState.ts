import { peopleInitialState, moviesInitialState, planetsInitialState } from "./slices";
import { AppState } from "./types";

export const appInitialState: AppState = {
  people: peopleInitialState,
  movies: moviesInitialState,
  planets: planetsInitialState,
};
