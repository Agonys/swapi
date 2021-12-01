import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin: 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.dimmed};
  }
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ theme }) => theme.colors.accent};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
