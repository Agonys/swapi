import React from "react";

import { IPropsNoData } from "./NoData.types";
import { StyledNoData } from "./NoData.styles";

const NoData: React.FC<IPropsNoData> = ({ message }) => (
  <StyledNoData>
    {message ?? "Unfortunately we could not find any data about your query 😞"}
  </StyledNoData>
);

export default NoData;
