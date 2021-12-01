import { PeopleState } from "./slices/people/people.types";
import { MoviesState } from "./slices/movies/movies.types";
import { PlanetsState } from "./slices/planets/planets.types";

export interface AppState {
  people: PeopleState;
  movies: MoviesState;
  planets: PlanetsState;
}
