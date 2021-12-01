import styled from "styled-components";

import { IPropsFavoriteWrapper } from "./Favorite.types";

export const FavoriteWrapper = styled.div<IPropsFavoriteWrapper>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.accent : theme.colors.white)};
`;
