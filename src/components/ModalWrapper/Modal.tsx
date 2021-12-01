import React from "react";
import ReactDOM from "react-dom";

import { IPropsModalWrapper } from "./Modal.types";
import { ModalWrapper, CloseButtonWrapper, ModalOverlay } from "./Modal.styles";
import Icon from "../Icon/Icon";
import ClickAwayListener from "react-click-away-listener";

const Modal: React.FC<IPropsModalWrapper> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <ClickAwayListener onClickAway={onClose}>
        <ModalWrapper>
          <CloseButtonWrapper>
            <Icon name="Cancel" />
          </CloseButtonWrapper>
          {children}
        </ModalWrapper>
      </ClickAwayListener>
    </>,
    document.getElementById("portal")!,
  );
};

export default Modal;
