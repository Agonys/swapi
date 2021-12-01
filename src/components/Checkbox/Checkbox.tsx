import React, { useState } from "react";

import { ICheckboxProps } from "./Checkbox.types";

import { CheckboxContainer, StyledCheckbox, Label } from "./Checkbox.styles";

const Checkbox: React.FC<ICheckboxProps> = ({ name, onClick, isChecked = false }) => {
  const [isBoxChecked, setBoxChecked] = useState(isChecked);

  const handleClick = () => {
    setBoxChecked((prevState) => !prevState);
    if (onClick) onClick();
  };

  return (
    <CheckboxContainer onClick={handleClick}>
      <StyledCheckbox isChecked={isBoxChecked} />
      <Label>{name}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
