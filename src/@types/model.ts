import React from "react";

export type themeTypes = "numbers" | "icons";
export type playersNumberTypes = 1 | 2 | 3 | 4;
export type gridTypes = 4 | 6;

export interface ContextInterface {
  gridSize: gridTypes;
  setGridSize: React.Dispatch<React.SetStateAction<gridTypes>>;
  showGame: boolean;
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>;
  theme: themeTypes;
  setTheme: React.Dispatch<React.SetStateAction<themeTypes>>;
  playersNumber: playersNumberTypes;
  setPlayersNumber: React.Dispatch<React.SetStateAction<playersNumberTypes>>;
  moves: number;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
  turn: number;
  setTurn: React.Dispatch<React.SetStateAction<number>>;
  turnArray: number[];
}
