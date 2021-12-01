import styled from "styled-components";
import { IPropsRow, IPropsTableWrapper, IPropsCell } from "./CharactersTable.types";
import { StyledNavLink } from "components/StyledLink/StyledLink.styles";

export const TableWrapper = styled.div<IPropsTableWrapper>`
  width: 100%;
  height: 100%;
  justify-content: ${({ isDataToDisplay }) => (isDataToDisplay ? "flex-start" : "center")};
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.backgrounds.normal};
  box-shadow: ${({ theme }) => theme.elevation.D1};

  h2 {
    font-size: 2rem;
    margin: 0;
  }
`;

export const Cell = styled.div<IPropsCell>`
  flex-basis: 10%;
  padding: 15px 0;
  min-width: 70px;

  &:first-of-type {
    padding-left: 15px;
  }

  &:last-of-type {
    padding: 0;
    display: flex;
    align-items: center;
    width: 100%;
  }

  ${({ disableBelowPCRes }) =>
    disableBelowPCRes &&
    `
    @media (max-width: 1024px) {
      display: none;
    }
  `}
`;

export const Row = styled.div<IPropsRow>`
  display: flex;
  width: 100%;
  font-size: 1.6rem;
  justify-content: space-between;
  gap: 10px;

  color: ${({ theme }) => theme.colors.white};
  ${({ isHeader, theme }) => isHeader && `background-color: ${theme.colors.backgrounds.dark}`};
`;

export const Border = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;

  ${StyledNavLink} {
    &:nth-child(2n + 1) {
      background-color: ${({ theme }) => theme.colors.backgrounds.light};
    }

    a {
      display: flex;
      width: 100%;
    }

    ${Cell} {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.backgrounds.dark};
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 7px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 25px;
`;
