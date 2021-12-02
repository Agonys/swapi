import React from "react";
import ReactDOM from "react-dom";
import ClickAwayListener from "react-click-away-listener";

import Icon from "components/Icon/Icon";

import { IPropsModalWrapper } from "./Modal.types";
import { ModalWrapper, CloseButtonWrapper, ModalOverlay } from "./Modal.styles";

const Modal: React.FC<IPropsModalWrapper> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <ClickAwayListener onClickAway={onClose}>
        <ModalWrapper>
          <CloseButtonWrapper onClick={onClose}>
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
