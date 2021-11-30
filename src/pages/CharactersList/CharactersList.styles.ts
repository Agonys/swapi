import styled from "styled-components";

export const CharactersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
  padding-top: 40px;

  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 40px 50px 50px;
  }
`;
