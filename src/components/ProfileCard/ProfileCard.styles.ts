import styled from "styled-components";
import { StyledButton } from "components/Button/Button.styles";
import { IPropsCell } from "./ProfileCard.types";

export const ProfileCardWrapper = styled.div`
  padding: 50px;
  height: 100%;
`;

export const StyledCard = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 50px 50px;
  flex-direction: column;
  gap: 25px;

  background-color: ${({ theme }) => theme.colors.backgrounds.normal};
  box-shadow: ${({ theme }) => theme.elevation.D1};
`;

export const Header = styled.h3`
  margin: 0;
  font-size: 2.4rem;
  text-align: center;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  font-size: 1.4rem;

  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.backgrounds.light};
  }
`;

export const Cell = styled.div<IPropsCell>`
  display: flex;
  padding: 15px;
  width: 50%;
  gap: 10px;
  user-select: none;
  align-items: center;
  ${({ displayPointer }) => displayPointer && "cursor: pointer"};

  &:first-of-type {
    justify-content: flex-end;
    border-right: 1px solid ${({ theme }) => theme.colors.backgrounds.dark};
  }

  &:last-of-type {
    justify-content: flex-start;
    border-left: 1px solid ${({ theme }) => theme.colors.backgrounds.dark};
  }

  //reset for Favorite's icon 100% width.
  div {
    width: auto;
  }

  ${StyledButton} {
    font-size: 1.2rem;
    padding: 5px 30px;
  }
`;

export const NoData = styled.div`
  font-size: 2.4rem;
  text-align: center;
  padding: 100px 90px;
`;
