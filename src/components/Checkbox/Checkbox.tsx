import React, { useState } from "react";

import { ICheckboxProps } from "./Checkbox.types";

import { CheckboxContainer, StyledCheckbox, Label } from "./Checkbox.styles";

const Checkbox: React.FC<ICheckboxProps> = ({ name }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <CheckboxContainer onClick={() => setChecked(!isChecked)}>
      <StyledCheckbox isChecked={isChecked} />
      <Label>{name}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
