import { createSlice } from "@reduxjs/toolkit";
import { planetsInitialState } from "./planetsInitialStore";

const planets = createSlice({
  name: "planets",
  initialState: planetsInitialState,
  reducers: {},
});

export default planets.reducer;
