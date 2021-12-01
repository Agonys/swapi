interface IQueryResponse {
  totalCount: number;
}

export interface IPeople {
  name: string;
  height: number;
  mass: number;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  id: number;
  homeworld: Pick<IPlanet, "name">;
  filmConnection: {
    films: Pick<IFilms, "title">[];
  };
}

export interface IGetAllPeopleResponse extends IQueryResponse {
  people: IPeople[];
}

export interface IGetAllPeople {
  allPeople: IGetAllPeopleResponse;
}

export interface IFilms {
  title: string;
  releaseDate: string;
  id: string;
}

export interface IGetAllFilmsResponse extends IQueryResponse {
  films: IFilms[];
}

export interface IGetAllFilms {
  allFilms: IGetAllFilmsResponse;
}

export interface IPlanet {
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

export interface IGetAllPlanetsResponse extends IQueryResponse {
  planets: IPlanet[];
}

export interface IGetAllPlanets {
  allPlanets: IGetAllPlanetsResponse;
}
