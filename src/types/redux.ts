export enum TaskStatus {
  IDLE,
  IN_PROGRESS,
  SUCCESS,
  ERROR,
}

export interface IGraphqlError {
  message?: string;
  status?: string;
}

export interface IFetchStatus {
  status: TaskStatus;
  isLoading: boolean;
  error: IGraphqlError | null;
}
