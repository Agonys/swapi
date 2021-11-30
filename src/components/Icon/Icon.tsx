import React, { lazy, Suspense } from "react";

import { IPropsIcon } from "./Icon.types";
import { Box } from "./Icon.styles";

const Icon: React.FC<IPropsIcon> = ({
  name,
  onClick,
  color,
  className,
  iconContainerClassName,
}) => {
  const DynamicComponent = lazy(() => import(`assets/icons/${name}`));
  console.log(DynamicComponent);

  return (
    <Suspense fallback={null}>
      <Box className={iconContainerClassName} onClick={onClick} color={color}>
        <DynamicComponent className={className} />
      </Box>
    </Suspense>
  );
};

export default Icon;
