import React from "react";

import { IPropsStyledLink } from "./StyledLink.types";
import { StyledNavLink } from "./StyledLink.styles";

const StyledLink: React.FC<IPropsStyledLink> = ({ children, to, className }) => (
  <StyledNavLink to={to} className={className}>
    {children}
  </StyledNavLink>
);

export default StyledLink;
