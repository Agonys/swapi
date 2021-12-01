import logger from "redux-logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./slices/people/people";
import filmsSlice from "./slices/films/films";
import planetsSlice from "./slices/planets/planets";
import filtersSlice from "./slices/filters/filters";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const appReducer = combineReducers({
  people: peopleSlice,
  films: filmsSlice,
  planets: planetsSlice,
  filters: filtersSlice,
});

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
