import React from "react";

import { Loader, LoaderWrapper } from "./CircularLoader.styles";
import { IPropsCircularLoader } from "./CircularLoader.types";

const CircularLoader: React.FC<IPropsCircularLoader> = ({ description }) => (
  <LoaderWrapper>
    <Loader />
    {description && <p>{description}</p>}
  </LoaderWrapper>
);

export default CircularLoader;
