import React from "react";
import routes from "config/routes";

import { NavigationWrapper, ItemsContainer, StyledNavLink } from "./Navigation.styles";
import { useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <NavigationWrapper>
      <ItemsContainer>
        <StyledNavLink
          to={`${routes.favorite.basic}/1`}
          $isActive={pathname.startsWith(routes.favorite.basic)}
        >
          {routes.favorite.label}
        </StyledNavLink>
        <StyledNavLink
          to={`${routes.characters.basic}/1`}
          $isActive={pathname.startsWith(routes.characters.basic)}
        >
          {routes.characters.label}
        </StyledNavLink>
        <StyledNavLink to={routes.contact.default}>{routes.contact.label}</StyledNavLink>
      </ItemsContainer>
    </NavigationWrapper>
  );
};

export default Navigation;
