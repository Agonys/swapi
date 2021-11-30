import React from "react";
import routes from "config/routes";

import { NavigationWrapper, ItemsContainer, StyledNavLink } from "./Navigation.styles";

const Navigation: React.FC = () => {
  const routesValues = Object.values(routes);

  return (
    <NavigationWrapper>
      <ItemsContainer>
        {routesValues.map((item) => (
          <StyledNavLink to={item.default}>{item.label}</StyledNavLink>
        ))}
      </ItemsContainer>
    </NavigationWrapper>
  );
};

export default Navigation;
