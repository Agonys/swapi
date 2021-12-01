import { IFetchStatus } from "types/redux";

export interface MoviesData {
  title: string;
  releaseDate: string;
}

export interface MoviesState {
  fetch: IFetchStatus;
  moviesList: MoviesData[];
  moviesCount: number;
}
