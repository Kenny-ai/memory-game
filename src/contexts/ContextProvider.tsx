import { createContext, useContext, useState } from "react";
import {
  ContextInterface,
  gridTypes,
  playersNumberTypes,
  themeTypes,
} from "../@types/model";

interface Props {
  children: React.ReactNode;
}

const StateContext = createContext<ContextInterface | null>(null);

export const ContextProvider = ({ children }: Props) => {
  const [gridSize, setGridSize] = useState<gridTypes>(4);
  const [showGame, setShowGame] = useState(false);
  const [theme, setTheme] = useState<themeTypes>("numbers");
  const [playersNumber, setPlayersNumber] = useState<playersNumberTypes>(1);
  const [moves, setMoves] = useState(0);
  const turnArray = [...Array(playersNumber+1).keys()].slice(1);
  const [turn, setTurn] = useState(turnArray[0]);

  const values = {
    gridSize,
    setGridSize,
    showGame,
    setShowGame,
    theme,
    setTheme,
    playersNumber,
    setPlayersNumber,
    moves,
    setMoves,
    turn,
    setTurn,
    turnArray
  };
  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as ContextInterface;
