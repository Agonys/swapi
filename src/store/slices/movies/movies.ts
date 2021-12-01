import { createSlice } from "@reduxjs/toolkit";
import { moviesInitialState } from "./moviesInitialState";

const movies = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  reducers: {},
});

export default movies.reducer;
