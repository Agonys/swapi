import styled from "styled-components";

import { IPropsBox } from "./Icon.types";

export const Box = styled.div<IPropsBox>`
  color: ${({ color }) => color || "white"};
`;
