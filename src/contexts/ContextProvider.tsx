import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {} from "../@types/stateTypes";
import { Actions, initialStateType } from "../@types/reducerTypes";
import { initializer } from "../reducers/reducer";

interface Props {
  children: React.ReactNode;
  reducer: (state: initialStateType, action: Actions) => initialStateType;
  initialState: initialStateType;
}

const StateContext = createContext<
  [initialStateType, Dispatch<Actions>] | null
>(null);

export const ContextProvider = ({ reducer, initialState, children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as [initialStateType, Dispatch<Actions>];
