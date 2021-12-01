import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 0;
  border-radius: 4px;
  background-color: transparent;
  padding: 8px 15px;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 0.3px;
  cursor: pointer;
  min-width: 100px;

  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.transitions.ease},
    color ${({ theme }) => theme.transitions.ease};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.black};
  }
`;
