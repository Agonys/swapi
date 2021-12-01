import { IFetchStatus } from "types/redux";
import { IPeople } from "types/graphql";

export interface PeopleState {
  fetch: IFetchStatus;
  peopleList: IPeople[];
  peopleCount: number;
}
