import { IFetchStatus } from "types/redux";

export interface PeopleData {
  name: string;
  height: number;
  mass: number;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  id: number;
}

export interface PeopleState {
  fetch: IFetchStatus;
  peopleList: PeopleData[];
  peopleCount: number;
}
