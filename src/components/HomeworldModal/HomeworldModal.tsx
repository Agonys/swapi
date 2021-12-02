import React from "react";

import Modal from "components/ModalWrapper/Modal";
import NoData from "components/NoData/NoData";

import { IPropsHomeworldModal } from "./HomeworldModal.types";

import { Header, DescriptionContainer, Cell, Column } from "./HomeworldModal.styles";

const HomeworldModal: React.FC<IPropsHomeworldModal> = ({ planet, onClose }) => {
  return (
    <Modal onClose={onClose}>
      {!planet ? (
        <NoData />
      ) : (
        <>
          <Header>{planet.name}</Header>
          <DescriptionContainer>
            <Column>
              <Cell>Name:</Cell>
              <Cell>Diameter:</Cell>
              <Cell>Orbital period:</Cell>
              <Cell>Rotation period:</Cell>
              <Cell>Gravity:</Cell>
              <Cell>Population:</Cell>
              <Cell>Surface water:</Cell>
              <Cell>Terrains:</Cell>
              <Cell>Climates:</Cell>
            </Column>
            <Column>
              <Cell>{planet.name}</Cell>
              <Cell>{planet.diameter}</Cell>
              <Cell>{planet.orbitalPeriod}</Cell>
              <Cell>{planet.rotationPeriod}</Cell>
              <Cell>{planet.gravity}</Cell>
              <Cell>{planet.population}</Cell>
              <Cell>{planet.surfaceWater}</Cell>
              <Cell>{planet.terrains.join(", ")}</Cell>
              <Cell>{planet.climates.join(", ")}</Cell>
            </Column>
          </DescriptionContainer>
        </>
      )}
    </Modal>
  );
};

export default HomeworldModal;
