import { createSlice } from "@reduxjs/toolkit";
import { peopleInitialState } from "./peopleInitialState";

const people = createSlice({
  name: "people",
  initialState: peopleInitialState,
  reducers: {
    toggleSomething(state) {
      console.log(state);
    },
  },
});

export const { toggleSomething } = people.actions;

export default people.reducer;
