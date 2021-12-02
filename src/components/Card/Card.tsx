import React from "react";

import { ProfileCardWrapper, StyledCard } from "./Card.styles";

const Card: React.FC = ({ children }) => (
  <ProfileCardWrapper>
    <StyledCard>{children}</StyledCard>
  </ProfileCardWrapper>
);

export default Card;
