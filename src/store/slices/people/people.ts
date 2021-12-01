import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { peopleInitialState } from "./peopleInitialState";
import { IGetAllPeopleResponse } from "types/graphql";

const people = createSlice({
  name: "people",
  initialState: peopleInitialState,
  reducers: {
    setPeople: (state, { payload }: PayloadAction<IGetAllPeopleResponse>) => {
      state.peopleCount = payload.totalCount;
      state.peopleList = payload.people;
      state.fetch.isLoading = false;
    },
    setPeopleError: (state, { payload }: PayloadAction<string>) => {
      state.fetch.isLoading = false;
      state.fetch.error = payload;
    },
    clearError: (state) => {
      state.fetch.error = null;
    },
  },
});

export const { setPeople, setPeopleError, clearError } = people.actions;

export default people.reducer;
