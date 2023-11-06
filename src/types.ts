export type AppState = {
  inputValue: string;
  data: Flight[] | null;
  isLoading: boolean;
  isError: boolean;
  sorting: SortingType;
};

export interface APIResponse extends Response {
  flights: Flight[];
}

export type Flight = {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  date: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: number;
};

export enum ActionType {
  SET_DATA_LOADING,
  SET_DATA_ERROR,
  SET_DATA,
  SET_INPUT_VALUE,
  SET_SORTING
}

type SetDataLoadingAction = { type: ActionType.SET_DATA_LOADING; payload: boolean };
type SetDataErrorAction = { type: ActionType.SET_DATA_ERROR; payload: boolean };
type SetData = { type: ActionType.SET_DATA; payload: Flight[] | null };
type SetInputValueAction = { type: ActionType.SET_INPUT_VALUE; payload: string };
type SetSortingValueAction = { type: ActionType.SET_SORTING; payload: SortingType };

export type Action = SetDataLoadingAction | SetDataErrorAction | SetData | SetInputValueAction | SetSortingValueAction;

export enum SortingType {
  EARLY_TO_LATE = "earlyToLate",
  LATE_TO_EARLY = "lateToEarly"
}
