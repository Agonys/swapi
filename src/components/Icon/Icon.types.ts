import * as IconsList from "assets/icons";

export interface IPropsIcon {
  name: keyof typeof IconsList;

  className?: string;
  rotate?: boolean;
  onClick?: (...args: any[]) => void;
  wrapperClassName?: string;
}

export interface IPropsBox {
  rotate?: boolean;
}
