import { createContext, Dispatch, useContext, useReducer } from "react";
import {} from "../@types/stateTypes";
import { Actions, initialStateType } from "../@types/reducerTypes";

interface Props {
  children: React.ReactNode;
  reducer: (state: initialStateType, action: Actions) => initialStateType;
  initialState: initialStateType;
}

const StateContext = createContext<
  [initialStateType, Dispatch<Actions>] | null
>(null);

export const ContextProvider = ({ reducer, initialState, children }: Props) => {
  const values = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as [initialStateType, Dispatch<Actions>];
