import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { planetsInitialState } from "./planetsInitialStore";
import { IGetAllPlanetsResponse } from "types/graphql";

const planets = createSlice({
  name: "planets",
  initialState: planetsInitialState,
  reducers: {
    setPlanets: (state, { payload }: PayloadAction<IGetAllPlanetsResponse>) => {
      state.planetsCount = payload.totalCount;
      state.planetsList = payload.planets;
      state.fetch.isLoading = false;
    },
    setPlanetsError: (state, { payload }: PayloadAction<string>) => {
      state.fetch.isLoading = false;
      state.fetch.error = payload;
    },
    clearError: (state) => {
      state.fetch.error = null;
    },
  },
});
export const { setPlanets, setPlanetsError, clearError } = planets.actions;
export default planets.reducer;
