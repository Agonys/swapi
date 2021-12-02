import { useCallback, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { displayToast } from "utils/displayToast";
import { LOCAL_STORAGE_FAVORITES_KEY } from "config/constants";
import { GET_ALL_FILMS, GET_ALL_PEOPLE, GET_ALL_PLANETS } from "graphql/query";

import { setFavorites } from "store/slices/favorites/favorites";
import { useAppDispatch } from "store/store";
import { setFilms, setFilmsError } from "store/slices/films/films";
import { setPeople, setPeopleError } from "store/slices/people/people";
import { setPlanets, setPlanetsError } from "store/slices/planets/planets";

import { IGetAllFilms, IGetAllPeople, IGetAllPlanets } from "types/graphql";

const useBackgroundTasks = (): void => {
  const dispatch = useAppDispatch();
  const favoritesList = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);

  const errorMessage = useCallback(
    (queryName: string) => `Failed to fetch ${queryName} data. Try to refresh page!`,
    [],
  );

  useQuery<IGetAllPlanets>(GET_ALL_PLANETS, {
    onCompleted: ({ allPlanets }) => {
      dispatch(setPlanets(allPlanets));
    },
    onError: () => {
      displayToast(errorMessage("planets"));
      dispatch(setPlanetsError(errorMessage("getAllPlanets")));
    },
  });

  useQuery<IGetAllPeople>(GET_ALL_PEOPLE, {
    onCompleted: ({ allPeople }) => {
      //format data to convert base64 ID to numeric value
      const formattedData = {
        ...allPeople,
        people: allPeople.people.map((person) => ({
          ...person,
          homeworld: {
            ...person.homeworld,
            id: atob(person.homeworld.id).split(":")[1],
          },
        })),
      };
      dispatch(setPeople(formattedData));
    },
    onError: () => {
      displayToast(errorMessage("people"));
      dispatch(setPeopleError(errorMessage("getAllPeople")));
    },
  });

  useQuery<IGetAllFilms>(GET_ALL_FILMS, {
    onCompleted: ({ allFilms }) => {
      dispatch(setFilms(allFilms));
    },
    onError: () => {
      displayToast(errorMessage("films"));
      dispatch(setFilmsError(errorMessage("getAllFilms")));
    },
  });

  useEffect(() => {
    if (favoritesList) {
      dispatch(setFavorites(JSON.parse(favoritesList)));
    }
  }, [dispatch, favoritesList]);
};

export default useBackgroundTasks;
