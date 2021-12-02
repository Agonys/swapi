import styled from "styled-components";
import { scrollbar } from "config/styles";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Header = styled.h4`
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

export const ListWrapper = styled.div`
  overflow: hidden;
  overflow-y: visible;

  ${scrollbar}
`;

export const ListItem = styled.div`
  padding: 8px 10px;

  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.backgrounds.light};
  }
`;
