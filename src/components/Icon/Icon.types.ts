import * as IconsList from "assets/icons";

export interface IPropsIcon {
  name: keyof typeof IconsList;

  className?: string;
  color?: string;
  rotate?: boolean;
  onClick?: (...args: any[]) => void;
  wrapperClassName?: string;
}

export interface IPropsBox {
  rotate?: boolean;
}
