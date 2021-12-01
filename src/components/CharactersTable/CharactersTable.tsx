import React, { useMemo, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/store";

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
import routes from "config/routes";
import Favorite from "components/Favorite/Favorite";
import { toggleFavorite } from "../../store/slices/favorites/favorites";
import useSliceArrayWithRange from "../../hooks/useSliceArrayWithRange";
import Button from "../Button/Button";

const CharactersTable: React.FC = () => {
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
    const filmFilters = filters.filters.films.map((film) => film.toLowerCase());
    const homeworldsFilters = filters.filters.homeworlds.map((homeworld) =>
      homeworld.toLowerCase(),
    );
    const searchValue = filters.searchValue.toLowerCase();
    let newPeopleList = peopleList.map((person) => ({
      ...person,
      // filmConnection: person.filmConnection.films.map(({ title }) => title.toLowerCase()),
    }));

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

    return newPeopleList;
  }, [filters, peopleList]);

  const { slicedArray, nextPage, previousPage } = useSliceArrayWithRange(
    parsedPageID,
    filteredPeopleArray,
  );

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
    <>
      <TableWrapper isDataToDisplay={slicedArray.length > 0}>
        {slicedArray.length === 0 ? (
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
      <ButtonsWrapper>
        <Button
          text="Previous"
          onClick={() => navigate(`${routes.characters.basic}/${previousPage}`)}
        />
        <Button text="Next" onClick={() => navigate(`${routes.characters.basic}/${nextPage}`)} />
      </ButtonsWrapper>
    </>
  );
};

export default CharactersTable;
