export interface IStyledCheckbox {
  isChecked: boolean;
}

export interface ICheckboxProps extends IStyledCheckbox {
  name: string;
  onClick?: () => void;
}
