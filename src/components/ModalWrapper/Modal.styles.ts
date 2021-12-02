import styled from "styled-components";
import { scrollbar } from "config/styles";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 80%;
  padding: 20px 50px 50px;
  font-size: 1.4rem;

  background-color: ${({ theme }) => theme.colors.backgrounds.normal};
  box-shadow: ${({ theme }) => theme.elevation.D1};
  ${scrollbar}
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  cursor: pointer;
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
