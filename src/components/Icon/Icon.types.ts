import * as iconsList from "assets/icons";

// Setting name property to be only available names from iconsList.
// IDE should catch it and display only possible values.
const iconsListCopy = { ...iconsList };

export interface IPropsIcon {
  name: keyof typeof iconsListCopy;

  className?: string;
  iconContainerClassName?: string;
  color?: string;
  onClick?: () => void;
}

export interface IPropsBox {
  color?: string;
}
