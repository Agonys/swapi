import React, { useState } from "react";
import Icon from "components/Icon/Icon";

import { IPropsFavorite } from "./IPropsFavorite";

import { FavoriteWrapper } from "./Favorite.styles";

const Favorite: React.FC<IPropsFavorite> = ({ isStarSelected }) => {
  const [isSelected, setSelected] = useState(isStarSelected);
  return (
    <FavoriteWrapper onClick={() => setSelected((prevState) => !prevState)}>
      <Icon name={isSelected ? "StarFilled" : "Star"} />
    </FavoriteWrapper>
  );
};

export default Favorite;
