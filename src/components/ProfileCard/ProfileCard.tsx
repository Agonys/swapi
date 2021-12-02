import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import toast from "react-hot-toast";

import { toggleFavorite } from "store/slices/favorites/favorites";
import { useAppDispatch, useAppSelector } from "store/store";
import { GET_PLANET_DATA } from "graphql/query";

import NoData from "components/NoData/NoData";
import Button from "components/Button/Button";
import Favorite from "components/Favorite/Favorite";
import CircularLoader from "components/CircularLoader/CircularLoader";
import HomeworldModal from "components/HomeworldModal/HomeworldModal";

import { IGetPlanetResponse } from "types/graphql";

import { Header, DataContainer, Row, Cell, Column } from "./ProfileCard.styles";
import Card from "../Card/Card";

const ProfileCard: React.FC = () => {
  const { characterID } = useParams();
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    peopleList,
    fetch: { isLoading },
  } = useAppSelector((state) => state.people);
  const { favoritesList } = useAppSelector((state) => state.favorites);

  const person = peopleList.find((person) => {
    return characterID
      ? person.name.toLowerCase() === characterID.replaceAll("_", " ").toLowerCase()
      : false;
  });

  const [getMorePlanetData, { loading: planetDataLoading, error, data: planetData }] =
    useLazyQuery<IGetPlanetResponse>(GET_PLANET_DATA, {
      onError: () => {
        if (isModalOpen) setModalOpen(false);
        toast(
          "Oops, something went wrong. We could not get any data. Refresh page or contact administrator",
        );
      },
    });

  const isPersonFavorite = person?.name ? favoritesList.includes(person.name.toLowerCase()) : false;

  const handleToggleFavorite = useCallback(
    (characterName: string) => dispatch(toggleFavorite(characterName)),
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleModalOpen = async () => {
    setModalOpen(true);
    if (person) {
      const variables = {
        planetID: person.homeworld.id,
      };

      await getMorePlanetData({ variables });
    }
  };

  if (!person && isLoading)
    return (
      <Card>
        <CircularLoader description="fetching character data..." />
      </Card>
    );

  return (
    <>
      <Card>
        <Header>{characterID?.replaceAll("_", " ")}</Header>
        {person ? (
          <DataContainer>
            <Column>
              <Cell>Name</Cell>
              <Cell>Homeworld</Cell>
              <Cell>Height</Cell>
              <Cell>Mass</Cell>
              <Cell>Hair color</Cell>
              <Cell>Skin color</Cell>
              <Cell>Eye color</Cell>
              <Cell>Birth year</Cell>
              <Cell>Gender</Cell>
              <Cell>Favorite</Cell>
              <Cell>Homeworld - more information</Cell>
            </Column>
            <Column>
              <Cell>{person.name}</Cell>
              <Cell>{person.homeworld.name}</Cell>
              <Cell>{person.height}</Cell>
              <Cell>{person.mass}</Cell>
              <Cell>{person.hairColor}</Cell>
              <Cell>{person.skinColor}</Cell>
              <Cell>{person.eyeColor}</Cell>
              <Cell>{person.birthYear}</Cell>
              <Cell>{person.gender}</Cell>
              <Cell displayPointer onClick={() => handleToggleFavorite(person.name)}>
                <Favorite isStarSelected={isPersonFavorite} />{" "}
                {isPersonFavorite ? "Remove from" : "Add to"} favorite!
              </Cell>
              <Cell>
                <Button text="MORE" onClick={handleModalOpen} />
              </Cell>
            </Column>
          </DataContainer>
        ) : (
          <NoData />
        )}
      </Card>

      {isModalOpen && !planetDataLoading && !error && (
        <HomeworldModal isOpen onClose={() => setModalOpen(false)} planet={planetData?.planet} />
      )}
    </>
  );
};
export default ProfileCard;
