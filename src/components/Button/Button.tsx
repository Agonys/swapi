import React from "react";

import { StyledButton } from "./Button.styles";
import { IPropsButton } from "./Button.types";

const Button: React.FC<IPropsButton> = ({ onClick, text }) => (
  <StyledButton type="button" onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
