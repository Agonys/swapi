import React, { useMemo, MouseEvent, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import routes from "config/routes";
import { toggleFavorite } from "store/slices/favorites/favorites";
import useSliceArrayWithRange from "hooks/useSliceArrayWithRange";
import { useAppDispatch, useAppSelector } from "store/store";
import { IPropsCharactersTable } from "./CharactersTable.types";

import Button from "components/Button/Button";
import Favorite from "components/Favorite/Favorite";
import StyledLink from "components/StyledLink/StyledLink";
import CircularLoader from "components/CircularLoader/CircularLoader";
import {
  TableWrapper,
  Row,
  Cell,
  Border,
  TableBody,
  ButtonsWrapper,
} from "./CharactersTable.styles";

import tableSchema from "./tableSchema";

const CharactersTable: React.FC<IPropsCharactersTable> = ({ isFavorite }) => {
  const { pageID } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const parsedPageID = parseInt(pageID ?? "1");
  const {
    peopleList,
    fetch: { isLoading, error },
  } = useAppSelector((state) => state.people);
  const filters = useAppSelector((state) => state.filters);
  const { favoritesList } = useAppSelector((state) => state.favorites);

  const filteredPeopleArray = useMemo(() => {
    const searchValue = filters.searchValue.toLowerCase();
    const filmFilters = filters.filters.films.map((film) => film.toLowerCase());
    const homeworldsFilters = filters.filters.homeworlds.map((homeworld) =>
      homeworld.toLowerCase(),
    );
    let newPeopleList = [...peopleList];

    if (filters.searchValue.length > 0) {
      newPeopleList = newPeopleList.filter(({ name }) => name.toLowerCase().includes(searchValue));
    }

    if (filters.filters.homeworlds.length > 0) {
      newPeopleList = newPeopleList.filter(({ homeworld }) =>
        homeworldsFilters.includes(homeworld.name.toLowerCase()),
      );
    }

    if (filters.filters.films.length > 0) {
      newPeopleList = newPeopleList.filter((person) =>
        person.filmConnection.films.some(({ title }) => filmFilters.includes(title.toLowerCase())),
      );
    }

    if (isFavorite) {
      newPeopleList = newPeopleList.filter(({ name }) =>
        favoritesList.includes(name.toLowerCase()),
      );
    }

    return newPeopleList;
  }, [favoritesList, isFavorite, filters, peopleList]);

  const { slicedArray, nextPage, previousPage } = useSliceArrayWithRange(
    parsedPageID,
    filteredPeopleArray,
  );

  const handleToggleFavorite = (e: MouseEvent<HTMLDivElement>, characterName: string) => {
    e.preventDefault();
    dispatch(toggleFavorite(characterName));
  };

  const handleNavigate = useCallback(
    (direction: "previous" | "next") => {
      const route = isFavorite ? routes.favorite.basic : routes.characters.basic;
      const navigationDirection = direction === "previous" ? previousPage : nextPage;
      navigate(`${route}/${navigationDirection}`);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [isFavorite, previousPage, nextPage],
  );

  if (isLoading && !error)
    return (
      <TableWrapper isDataToDisplay={false}>
        <CircularLoader description="loading characters data..." />
      </TableWrapper>
    );

  return (
    <>
      <TableWrapper isDataToDisplay={slicedArray.length > 0}>
        {slicedArray.length === 0 ? (
          <h2>
            No data to display &nbsp;
            <br />
            (┛ಠ_ಠ)┛彡┻━┻
          </h2>
        ) : (
          <>
            <Row isHeader>
              {tableSchema.headers.map(({ disableBelowPCRes, label }) => (
                <Cell key={label} disableBelowPCRes={disableBelowPCRes}>
                  {label}
                </Cell>
              ))}
            </Row>
            <Border />

            <TableBody>
              {slicedArray.map((person) => {
                const {
                  name,
                  height,
                  mass,
                  hairColor,
                  skinColor,
                  eyeColor,
                  birthYear,
                  gender,
                  id,
                  homeworld,
                } = person;

                return (
                  <StyledLink key={id} to={`${routes.profile.basic}/${name.replaceAll(" ", "_")}`}>
                    <Row>
                      <Cell>{name}</Cell>
                      <Cell>{homeworld.name}</Cell>
                      <Cell>{height}</Cell>
                      <Cell>{mass}</Cell>
                      <Cell disableBelowPCRes>{hairColor}</Cell>
                      <Cell disableBelowPCRes>{skinColor}</Cell>
                      <Cell disableBelowPCRes>{eyeColor}</Cell>
                      <Cell disableBelowPCRes>{birthYear}</Cell>
                      <Cell disableBelowPCRes>{gender}</Cell>
                      <Cell onClick={(e) => handleToggleFavorite(e, name)}>
                        <Favorite isStarSelected={favoritesList.includes(name.toLowerCase())} />
                      </Cell>
                    </Row>
                  </StyledLink>
                );
              })}
            </TableBody>
          </>
        )}
      </TableWrapper>
      <ButtonsWrapper>
        <Button text="Previous" onClick={() => handleNavigate("previous")} />
        <Button text="Next" onClick={() => handleNavigate("next")} />
      </ButtonsWrapper>
    </>
  );
};

export default CharactersTable;
