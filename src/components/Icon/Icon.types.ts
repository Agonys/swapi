import * as IconsList from "assets/icons";

export interface IPropsIcon {
  name: keyof typeof IconsList;

  className?: string;
  rotateIcon?: boolean;
  onClick?: (...args: any[]) => void;
  wrapperClassName?: string;
}

export type IPropsBox = Pick<IPropsIcon, "rotateIcon">;
