import { IPlanet } from "types/graphql";

export interface IPropsHomeworldModal {
  planet: IPlanet | undefined;
  onClose: () => void;
}
