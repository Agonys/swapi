import React from "react";
import { useAppDispatch } from "store/store";
import { toggleFilter } from "store/slices/filters/filters";

import Checkbox from "components/Checkbox/Checkbox";
import { IPropsScrollableList } from "./ScrollableFiltersList.types";
import { ListContainer, Header, ListWrapper, ListItem } from "./ScrollableFiltersList.styles";

const ScrollableFiltersList: React.FC<IPropsScrollableList> = ({
  header,
  filtersList,
  filterType,
  filtersActive,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = (filterEntry: string) => {
    dispatch(toggleFilter({ filterType, filterEntry }));
  };
  return (
    <ListContainer>
      <Header>{header}</Header>
      <ListWrapper>
        {filtersList.map(({ name }) => (
          <ListItem key={name}>
            <Checkbox
              name={name}
              onClick={() => handleClick(name)}
              isChecked={filtersActive.includes(name)}
            />
          </ListItem>
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export default React.memo(ScrollableFiltersList);
