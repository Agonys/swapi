import React, { useMemo, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/store";

import StyledLink from "components/StyledLink/StyledLink";
import CircularLoader from "components/CircularLoader/CircularLoader";
import { TableWrapper, Row, Cell, Border, TableBody } from "./CharactersTable.styles";
import { CHARACTER_LIST_PAGE_LIMIT } from "config/constants";
import routes from "config/routes";
import Favorite from "components/Favorite/Favorite";
import { toggleFavorite } from "../../store/slices/favorites/favorites";

const CharactersTable: React.FC = () => {
  const { pageID } = useParams();
  const dispatch = useAppDispatch();
  const parsedPageID = parseInt(pageID ?? "1");
  const {
    peopleList,
    peopleCount,
    fetch: { isLoading, error },
  } = useAppSelector((state) => state.people);
  const filters = useAppSelector((state) => state.filters);
  const { favoritesList } = useAppSelector((state) => state.favorites);

  const listRange = useMemo(() => {
    const maxPagesNumber = Math.ceil(peopleCount / CHARACTER_LIST_PAGE_LIMIT);
    return maxPagesNumber > parsedPageID
      ? [(parsedPageID - 1) * CHARACTER_LIST_PAGE_LIMIT, parsedPageID * CHARACTER_LIST_PAGE_LIMIT]
      : [
          (maxPagesNumber - 1) * CHARACTER_LIST_PAGE_LIMIT,
          maxPagesNumber * CHARACTER_LIST_PAGE_LIMIT,
        ];
  }, [parsedPageID, peopleCount]);

  const slicedPeopleArray = useMemo(() => {
    const filmFilters = filters.filters.films.map((film) => film.toLowerCase());
    const homeworldsFilters = filters.filters.homeworlds.map((homeworld) =>
      homeworld.toLowerCase(),
    );
    const searchValue = filters.searchValue.toLowerCase();
    let newPeopleList = peopleList.map((person) => ({
      ...person,
      name: person.name.toLowerCase(),
      homeworld: {
        name: person.homeworld.name.toLowerCase(),
      },
      filmConnection: person.filmConnection.films.map(({ title }) => title.toLowerCase()),
    }));

    if (filters.searchValue.length > 0) {
      newPeopleList = newPeopleList.filter(({ name }) => name.includes(searchValue));
    }

    if (filters.filters.homeworlds.length > 0) {
      newPeopleList = newPeopleList.filter(({ homeworld }) =>
        homeworldsFilters.includes(homeworld.name),
      );
    }

    if (filters.filters.films.length > 0) {
      newPeopleList = newPeopleList.filter((person) =>
        person.filmConnection.some((film) => filmFilters.includes(film)),
      );
    }

    return newPeopleList.slice(...listRange);
  }, [listRange, filters, peopleList]);

  const handleToggleFavorite = (e: MouseEvent<HTMLDivElement>, characterName: string) => {
    e.preventDefault();
    dispatch(toggleFavorite(characterName));
  };

  if (isLoading && !error)
    return (
      <TableWrapper isDataToDisplay={false}>
        <CircularLoader description="loading characters data..." />
      </TableWrapper>
    );

  return (
    <TableWrapper isDataToDisplay={slicedPeopleArray.length > 0}>
      {slicedPeopleArray.length === 0 ? (
        <h2>No data to display &nbsp;:(</h2>
      ) : (
        <>
          <Row isHeader>
            <Cell>Name</Cell>
            <Cell>Homeworld</Cell>
            <Cell>Height</Cell>
            <Cell>Mass</Cell>
            <Cell disableBelowPC>Hair color</Cell>
            <Cell disableBelowPC>Skin Color</Cell>
            <Cell disableBelowPC>Eye color</Cell>
            <Cell disableBelowPC>Birth year</Cell>
            <Cell disableBelowPC>Gender</Cell>
            <Cell>Favorite</Cell>
          </Row>
          <Border />

          <TableBody>
            {slicedPeopleArray.map((person) => {
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
                    <Cell>{mass ?? "?"}</Cell>
                    <Cell disableBelowPC>{hairColor}</Cell>
                    <Cell disableBelowPC>{skinColor}</Cell>
                    <Cell disableBelowPC>{eyeColor}</Cell>
                    <Cell disableBelowPC>{birthYear}</Cell>
                    <Cell disableBelowPC>{gender}</Cell>
                    <Cell onClick={(e) => handleToggleFavorite(e, name)}>
                      <Favorite isStarSelected={favoritesList.includes(name)} />
                    </Cell>
                  </Row>
                </StyledLink>
              );
            })}
          </TableBody>
        </>
      )}
    </TableWrapper>
  );
};

export default CharactersTable;
