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
      const normalizedPayload = payload.toLowerCase();
      const isFavoriteOnList = state.favoritesList.some(
        (favorite) => favorite === normalizedPayload,
      );

      state.favoritesList = isFavoriteOnList
        ? state.favoritesList.filter((favorite) => favorite !== normalizedPayload)
        : [...state.favoritesList, normalizedPayload];

      localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(state.favoritesList));
    },
  },
});

export const { setFavorites, toggleFavorite } = favorites.actions;
export default favorites.reducer;
