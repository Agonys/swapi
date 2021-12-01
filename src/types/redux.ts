export interface IFetchStatus {
  isLoading: boolean;
  error: string | null;
}

export enum filterType {
  FILMS = "films",
  HOMEWORLDS = "homeworlds",
}
