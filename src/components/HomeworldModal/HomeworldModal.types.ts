import { IPlanet } from "types/graphql";

export interface IPropsHomeworldModal {
  planet: IPlanet | undefined;
  isOpen: boolean;
  onClose: () => void;
}
