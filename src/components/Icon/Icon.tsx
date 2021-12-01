import React from "react";
import * as IconsList from "assets/icons";

import { Box } from "./Icon.styles";
import { IPropsIcon } from "./Icon.types";

const Icon: React.FC<IPropsIcon> = ({
  name,
  className,
  rotate = false,
  onClick,
  wrapperClassName,
}) => {
  const IconComponent = IconsList[name];

  return (
    <Box onClick={onClick} rotate={rotate} className={wrapperClassName}>
      <IconComponent className={className} />
    </Box>
  );
};

export default Icon;
