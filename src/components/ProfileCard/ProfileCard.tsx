import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Favorite from "../Favorite/Favorite";
import { toggleFavorite } from "store/slices/favorites/favorites";
import { useAppDispatch, useAppSelector } from "store/store";

import {
  StyledCard,
  ProfileCardWrapper,
  Header,
  DataContainer,
  Row,
  Cell,
  NoData,
} from "./ProfileCard.styles";
import Button from "../Button/Button";
import CircularLoader from "../CircularLoader/CircularLoader";
import Modal from "../ModalWrapper/Modal";

const ProfileCard: React.FC = () => {
  const { characterID } = useParams();
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const { isLoading } = useAppSelector((state) => state.people.fetch);
  const { peopleList } = useAppSelector((state) => state.people);
  const { favoritesList } = useAppSelector((state) => state.favorites);
  const person = peopleList.find((person) => {
    if (characterID)
      return person.name.toLowerCase() === characterID.replaceAll("_", " ").toLowerCase();
    return false;
  });

  const isPersonFavorite = person?.name ? favoritesList.includes(person.name.toLowerCase()) : false;

  const handleToggleFavorite = (characterName: string) => {
    dispatch(toggleFavorite(characterName));
  };

  if (!person && isLoading)
    return (
      <ProfileCardWrapper>
        <StyledCard>
          <CircularLoader description="fetching character data..." />{" "}
        </StyledCard>
      </ProfileCardWrapper>
    );

  return (
    <>
      <ProfileCardWrapper>
        <StyledCard>
          <Header>{characterID?.replaceAll("_", " ")}</Header>
          {person ? (
            <DataContainer>
              <Row>
                <Cell>Name</Cell>
                <Cell>{person.name}</Cell>
              </Row>
              <Row>
                <Cell>Homeworld</Cell>
                <Cell>{person.homeworld.name}</Cell>
              </Row>
              <Row>
                <Cell>Height</Cell>
                <Cell>{person.height}</Cell>
              </Row>
              <Row>
                <Cell>Mass</Cell>
                <Cell>{person.mass}</Cell>
              </Row>
              <Row>
                <Cell>Hair color</Cell>
                <Cell>{person.hairColor}</Cell>
              </Row>
              <Row>
                <Cell>Skin color</Cell>
                <Cell>{person.skinColor}</Cell>
              </Row>
              <Row>
                <Cell>Eye color</Cell>
                <Cell>{person.eyeColor}</Cell>
              </Row>
              <Row>
                <Cell>Birth year</Cell>
                <Cell>{person.birthYear}</Cell>
              </Row>
              <Row>
                <Cell>Gender</Cell>
                <Cell>{person.gender}</Cell>
              </Row>
              <Row>
                <Cell>Favorite</Cell>
                <Cell displayPointer onClick={() => handleToggleFavorite(person.name)}>
                  <Favorite isStarSelected={isPersonFavorite} />{" "}
                  {isPersonFavorite ? "Remove from" : "Add to"} favorite!
                </Cell>
              </Row>
              <Row>
                <Cell>Homeworld - more information</Cell>
                <Cell>
                  <Button text="MORE" onClick={() => setModalOpen(true)} />
                </Cell>
              </Row>
            </DataContainer>
          ) : (
            <NoData>Unfortunately we couldn’t find any data about this character 😞</NoData>
          )}
        </StyledCard>
      </ProfileCardWrapper>

      <Modal onClose={() => setModalOpen(false)} isOpen={isModalOpen}>
        cokolwiek na teraz
      </Modal>
    </>
  );
};
export default ProfileCard;
