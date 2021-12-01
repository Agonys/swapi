import { IFetchStatus } from "types/redux";

export interface PlanetsData {
  name: string;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
  gravity: string;
  population: number;
  climates: string[];
  terrains: string[];
  surfaceWater: number;
  id: string;
}

export interface PlanetsState {
  fetch: IFetchStatus;
  planetsList: PlanetsData[];
  planetsCount: number;
}
