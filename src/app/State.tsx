import useFlights from "@hooks/useFlights";
import { PropsWithChildren, createContext, useEffect, useReducer } from "react";
import { Action, ActionType, AppState, SortingType } from "types";

const initialState: AppState = {
  inputValue: "",
  inputHasChanged: false,
  data: [],
  isLoading: false,
  isError: false,
  sorting: SortingType.EARLY_TO_LATE
};

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case ActionType.SET_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case ActionType.SET_DATA_ERROR:
      return {
        ...state,
        isError: action.payload
      };
    case ActionType.SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case ActionType.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
        inputHasChanged: action.payload.length > 0
      };
    case ActionType.SET_SORTING:
      return {
        ...state,
        sorting: action.payload
      };
    default:
      return state;
  }
}

export const State = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

export function StateProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Runs only once
  const { data: flightData, isLoading, isError } = useFlights();

  //  Update the app state when data is loaded
  useEffect(() => {
    dispatch({ type: ActionType.SET_DATA_LOADING, payload: isLoading });
    dispatch({ type: ActionType.SET_DATA_ERROR, payload: isError });
    dispatch({ type: ActionType.SET_DATA, payload: flightData });
  }, [flightData, isLoading, isError]);

  return <State.Provider value={{ state, dispatch }}>{children}</State.Provider>;
}
