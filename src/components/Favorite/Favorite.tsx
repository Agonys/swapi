import React from "react";
import Icon from "components/Icon/Icon";

import { IPropsFavorites } from "./Favorite.types";

import { FavoriteWrapper } from "./Favorite.styles";

const Favorite: React.FC<IPropsFavorites> = ({ isStarSelected }) => {
  return (
    <FavoriteWrapper isSelected={isStarSelected}>
      <Icon name={isStarSelected ? "StarFilled" : "Star"} />
    </FavoriteWrapper>
  );
};

export default Favorite;
