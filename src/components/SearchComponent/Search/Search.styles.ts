import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgrounds.light};
  border: 1px solid ${({ theme }) => theme.colors.borders.dark};
`;

export const SearchInput = styled.input`
  width: 100%;
`;
