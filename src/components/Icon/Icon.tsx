import React from "react";
import styled from "styled-components";
import * as IconsList from "assets/icons";

import { Box } from "./Icon.styles";
import { IPropsIcon } from "./Icon.types";

const Icon: React.FC<IPropsIcon> = ({
  name,
  color,
  className,
  rotate,
  onClick,
  wrapperClassName,
}) => {
  const IconComponent = IconsList[name];

  const StyledIcon = styled(IconComponent)`
    color: ${color ?? "inherit"};
  `;

  return (
    <Box onClick={onClick} rotate={rotate} className={wrapperClassName}>
      <StyledIcon className={className} />
    </Box>
  );
};

export default Icon;
