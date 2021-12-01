import { TaskStatus } from "types/redux";

import { MoviesState } from "./movies.types";

export const moviesInitialState: MoviesState = {
  fetch: {
    status: TaskStatus.IDLE,
    isLoading: false,
    error: null,
  },
  moviesList: [],
  moviesCount: 0,
};
