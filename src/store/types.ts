import { PeopleState } from "./slices/people/people.types";
import { FilmsState } from "./slices/films/films.types";
import { PlanetsState } from "./slices/planets/planets.types";

export interface AppState {
  people: PeopleState;
  movies: FilmsState;
  planets: PlanetsState;
}
