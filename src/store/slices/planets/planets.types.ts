import { IFetchStatus } from "types/redux";
import { IPlanet } from "types/graphql";

export interface PlanetsState {
  fetch: IFetchStatus;
  planetsList: IPlanet[];
  planetsCount: number;
}
