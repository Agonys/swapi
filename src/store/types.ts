import { PeopleState } from "./slices/people/people.types";
import { FilmsState } from "./slices/films/films.types";
import { PlanetsState } from "./slices/planets/planets.types";
import { FiltersState } from "./slices/filters/filters.types";
import { FavoritesState } from "./slices/favorites/favorites.types";

export interface AppState {
  people: PeopleState;
  movies: FilmsState;
  planets: PlanetsState;
  filters: FiltersState;
  favorites: FavoritesState;
}
