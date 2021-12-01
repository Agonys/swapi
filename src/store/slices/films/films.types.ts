import { IFetchStatus } from "types/redux";
import { IFilms } from "types/graphql";

export interface FilmsState {
  fetch: IFetchStatus;
  filmsList: IFilms[];
  filmsCount: number;
}
