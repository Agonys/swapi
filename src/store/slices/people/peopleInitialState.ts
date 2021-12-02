import { PeopleState } from "./people.types";

export const peopleInitialState: PeopleState = {
  fetch: {
    isLoading: true,
    error: null,
  },
  peopleList: [],
  peopleCount: 0,
};
