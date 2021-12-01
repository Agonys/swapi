import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgrounds.light};
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.backgrounds.dark};
  opacity: 0.5;
  z-index: 10;
`;
