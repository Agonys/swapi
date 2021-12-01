import { TaskStatus } from "types/redux";
import { PlanetsState } from "./planets.types";

export const planetsInitialState: PlanetsState = {
  fetch: {
    status: TaskStatus.IDLE,
    isLoading: false,
    error: null,
  },
  planetsList: [],
  planetsCount: 0,
};
