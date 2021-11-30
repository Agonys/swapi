import React from "react";

import { TableWrapper, Row, Cell, Border, TableBody } from "./CharactersTable.styles";
import StyledLink from "components/StyledLink/StyledLink";

const CharactersTable: React.FC = () => {
  return (
    <TableWrapper>
      <Row isHeader>
        <Cell>Name</Cell>
        <Cell>Homeworld</Cell>
        <Cell>Height</Cell>
        <Cell>Mass</Cell>
        <Cell disableBelowPC>Hair color</Cell>
        <Cell disableBelowPC>Skin Color</Cell>
        <Cell disableBelowPC>Eye color</Cell>
        <Cell>Birth year</Cell>
        <Cell>Gender</Cell>
        <Cell>Favorite</Cell>
      </Row>
      <Border />

      <TableBody>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <StyledLink to={`/${i}`}>
              <Row>
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <Cell>{i}</Cell>
                  ))}
              </Row>
            </StyledLink>
          ))}
      </TableBody>
    </TableWrapper>
  );
};

export default CharactersTable;
