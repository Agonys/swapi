import React from "react";
import routes from "config/routes";

import { NavigationWrapper, ItemsContainer, StyledNavLink } from "./Navigation.styles";

const Navigation: React.FC = () => (
  <NavigationWrapper>
    <ItemsContainer>
      {Object.values(routes).map((item) => (
        <StyledNavLink to={item.default}>{item.label}</StyledNavLink>
      ))}
    </ItemsContainer>
  </NavigationWrapper>
);

export default Navigation;
