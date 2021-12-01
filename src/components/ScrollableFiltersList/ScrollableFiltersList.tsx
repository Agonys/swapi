import React from "react";

import { IPropsScrollableList } from "./ScrollableFiltersList.types";
import { ListContainer, Header, ListWrapper, ListItem } from "./ScrollableFiltersList.styles";
import Checkbox from "../Checkbox/Checkbox";

const ScrollableFiltersList: React.FC<IPropsScrollableList> = ({ header, filtersList }) => {
  return (
    <ListContainer>
      <Header>{header}</Header>
      <ListWrapper>
        {filtersList.map(({ name }) => (
          <ListItem key={name}>
            <Checkbox name={name} />
          </ListItem>
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export default React.memo(ScrollableFiltersList);
