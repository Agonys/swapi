import styled from "styled-components";

import { IPropsBox } from "./Icon.types";

export const Box = styled.div<IPropsBox>`
  transition: transform ${({ theme }) => theme.transitions.ease};
  transform: rotate(${({ rotate }) => (rotate ? "180deg" : "0deg")});
`;
