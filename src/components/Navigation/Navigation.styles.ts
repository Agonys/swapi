import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgrounds.dark};
  justify-content: center;
`;

export const ItemsContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)<{ $isActive?: boolean }>`
  font-size: 2rem;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.accent : theme.colors.white)};
  text-decoration: none;
  padding: 10px 0;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
