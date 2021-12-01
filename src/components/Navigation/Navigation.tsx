import React from "react";
import routes from "config/routes";

import { NavigationWrapper, ItemsContainer, StyledNavLink } from "./Navigation.styles";

const Navigation: React.FC = () => (
  <NavigationWrapper>
    <ItemsContainer>
      <StyledNavLink to={routes.favorite.default}>{routes.favorite.label}</StyledNavLink>
      <StyledNavLink to={`${routes.characters.basic}/1`}>{routes.characters.label}</StyledNavLink>
      <StyledNavLink to={routes.contact.default}>{routes.contact.label}</StyledNavLink>
    </ItemsContainer>
  </NavigationWrapper>
);

export default Navigation;
