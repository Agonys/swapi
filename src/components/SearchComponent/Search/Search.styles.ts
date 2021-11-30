import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.borders.dark};
  background: ${({ theme }) => theme.colors.backgrounds.light};
  align-items: center;

  .iconContainer {
    padding: 12px 15px;
    cursor: pointer;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  font-size: 1.4rem;
  outline: 0;
  padding: 12px 15px;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.backgrounds.light};
`;
