import styled from "styled-components";
import { StyledButton } from "components/Button/Button.styles";
import { IPropsCell } from "./ProfileCard.types";

export const Header = styled.h3`
  margin: 0;
  font-size: 2.4rem;
  text-align: center;
`;

export const DataContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  &:first-of-type div {
    justify-content: flex-end;

    border-right: 1px solid ${({ theme }) => theme.colors.backgrounds.dark};
  }

  &:last-of-type div {
    border-left: 1px solid ${({ theme }) => theme.colors.backgrounds.dark};
  }
`;

export const Cell = styled.div<IPropsCell>`
  display: flex;
  padding: 15px;
  width: 100%;
  gap: 10px;
  user-select: none;
  align-items: center;
  font-size: 1.4rem;

  ${({ displayPointer }) => displayPointer && "cursor: pointer"};

  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.backgrounds.light};
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
