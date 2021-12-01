import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { favoritesInitialState } from "./favoritesInitialState";
import { LOCAL_STORAGE_FAVORITES_KEY } from "config/constants";

const favorites = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    setFavorites(state, { payload }: PayloadAction<string[]>) {
      state.favoritesList = payload;
    },

    toggleFavorite(state, { payload }: PayloadAction<string>) {
      const isFavoriteOnList = state.favoritesList.find((favorite) => favorite === payload);

      state.favoritesList = isFavoriteOnList
        ? state.favoritesList.filter((favorite) => favorite !== payload)
        : [...state.favoritesList, payload];

      localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(state.favoritesList));
    },
  },
});

export const { setFavorites, toggleFavorite } = favorites.actions;
export default favorites.reducer;
