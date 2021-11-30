import styled from "styled-components";

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;

  h1 {
    font-size: 7rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.accent};
    margin: 0;
    font-family: "Roboto", serif;
  }
`;
