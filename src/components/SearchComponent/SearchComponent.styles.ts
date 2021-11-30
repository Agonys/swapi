import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.dimmed};
    text-align: center;
    margin-bottom: 5px;
  }
`;
