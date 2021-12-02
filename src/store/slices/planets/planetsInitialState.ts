import { PlanetsState } from "./planets.types";

export const planetsInitialState: PlanetsState = {
  fetch: {
    isLoading: true,
    error: null,
  },
  planetsList: [],
  planetsCount: 0,
};
