import { TaskStatus } from "types/redux";

import { PeopleState } from "./people.types";

export const peopleInitialState: PeopleState = {
  fetch: {
    status: TaskStatus.IDLE,
    isLoading: false,
    error: null,
  },
  peopleList: [],
  peopleCount: 0,
};
