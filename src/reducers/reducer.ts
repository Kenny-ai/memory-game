import { Actions, initialStateType } from "../@types/reducerTypes";

export const initialState: initialStateType = {
  playerDetails: [],
};

export const initializer: (
  initialValue: initialStateType
) => initialStateType = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("state")!) || initialValue;

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case `CREATE_PLAYERS`:
      return {
        ...state,
        playerDetails: [
          ...(state.playerDetails as []),
          ...(action.payload as []),
        ],
      };
    case "EMPTY_PLAYERS_ARRAY":
      return {
        ...state,
        playerDetails: [],
      };
    case "UPDATE_PLAYER_SCORE":
      return {
        ...state,
        playerDetails: state.playerDetails!.map((detail) => {
          if (detail.id !== action.payload.id) {
            return detail;
          }
          return { ...detail, score: detail.score + 1 };
        }),
      };
    case "CLEAR_PLAYER_SCORES":
      return {
        ...state,
        playerDetails: state.playerDetails!.map((detail) => ({
          ...detail,
          score: 0,
        })),
      };
    default:
      return state;
  }
};

export default reducer;
