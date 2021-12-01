import React, { useState } from "react";

import { ICheckboxProps } from "./Checkbox.types";

import { CheckboxContainer, StyledCheckbox, Label } from "./Checkbox.styles";

const Checkbox: React.FC<ICheckboxProps> = ({ name, onClick }) => {
  const [isChecked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prevState) => !prevState);
    if (onClick) onClick();
  };

  return (
    <CheckboxContainer onClick={handleClick}>
      <StyledCheckbox isChecked={isChecked} />
      <Label>{name}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
