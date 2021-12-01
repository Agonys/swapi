import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { useQuery } from "@apollo/client";
import { IGetAllFilms, IGetAllPeople, IGetAllPlanets } from "../types/graphql";
import { GET_ALL_FILMS, GET_ALL_PEOPLE, GET_ALL_PLANETS } from "../graphql/query";
import { setPlanets, setPlanetsError } from "store/slices/planets/planets";
import { setPeople, setPeopleError } from "store/slices/people/people";
import { setFilms, setFilmsError } from "store/slices/films/films";
import { LOCAL_STORAGE_FAVORITES_KEY } from "../config/constants";
import { setFavorites } from "../store/slices/favorites/favorites";

const useBackgroundTasks = (): void => {
  const dispatch = useAppDispatch();
  const favoritesList = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);

  const errorMessage = useCallback(
    (queryName: string) => `Failed to fetch ${queryName}. Try to refresh page!`,
    [],
  );

  useQuery<IGetAllPlanets>(GET_ALL_PLANETS, {
    onCompleted: ({ allPlanets }) => {
      dispatch(setPlanets(allPlanets));
    },
    onError: () => dispatch(setPlanetsError(errorMessage("getAllPlanets"))),
  });

  useQuery<IGetAllPeople>(GET_ALL_PEOPLE, {
    onCompleted: ({ allPeople }) => {
      dispatch(setPeople(allPeople));
    },
    onError: () => dispatch(setPeopleError(errorMessage("getAllPeople"))),
  });

  useQuery<IGetAllFilms>(GET_ALL_FILMS, {
    onCompleted: ({ allFilms }) => {
      dispatch(setFilms(allFilms));
    },
    onError: () => dispatch(setFilmsError(errorMessage("getAllFilms"))),
  });

  useEffect(() => {
    if (favoritesList) {
      dispatch(setFavorites(JSON.parse(favoritesList)));
    }
  }, [dispatch, favoritesList]);
};

export default useBackgroundTasks;
