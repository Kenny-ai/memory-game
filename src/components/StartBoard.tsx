import React from "react";
import { Link } from "react-router-dom";
import {
  gridTypes,
  playersNumberTypes,
  themeTypes,
} from "../@types/stateTypes";
import { useStateContext } from "../contexts/ContextProvider";

interface Props {
  gridSize: gridTypes;
  setGridSize: React.Dispatch<React.SetStateAction<gridTypes>>;
  theme: themeTypes;
  setTheme: React.Dispatch<React.SetStateAction<themeTypes>>;
  playersNumber: playersNumberTypes;
  setPlayersNumber: React.Dispatch<React.SetStateAction<playersNumberTypes>>;
}

const StartBoard = ({
  gridSize,
  setGridSize,
  theme,
  setTheme,
  playersNumber,
  setPlayersNumber,
}: Props) => {
  const [, dispatch] = useStateContext();

  const handleGridSize = (value: gridTypes) => {
    setGridSize(value);
  };
  const handleTheme = (value: themeTypes) => {
    setTheme(value);
  };

  const handleOnePlayer = () => {
    setPlayersNumber(1);
  };

  const handlePlayerNumber = (value: playersNumberTypes) => {
    setPlayersNumber(value);
    dispatch({
      type: "EMPTY_PLAYERS_ARRAY",
    });
    for (let i = 1; i <= value; i++) {
      dispatch({
        type: "CREATE_PLAYERS",
        payload: [
          {
            id: i,
            mobileName: `P${i}`,
            desktopName: `Player ${i}`,
            score: 0,
            turn: i,
          },
        ],
      });
    }
  };
  return (
    <div className="bg-white-text p-6 h-fit min-w-[20rem] md:p-10 md:w-[40rem] rounded-lg">
      <div className="">
        <div className="mb-6 md:mb-10">
          <h5 className="font-bold mb-2 text-[#7e9cae] md:text-lg">
            Select Theme
          </h5>
          <div className="flex justify-between">
            <button
              onClick={() => handleTheme("numbers")}
              className={`${
                theme === "numbers"
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-32 py-2 rounded-3xl font-bold md:w-64 md:py-3 md:text-xl`}
            >
              Numbers
            </button>
            <button
              onClick={() => handleTheme("icons")}
              className={`${
                theme === "icons"
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-32 py-2 rounded-3xl font-bold md:w-64 md:py-3 md:text-xl`}
            >
              Icons
            </button>
          </div>
        </div>

        <div className="mb-6 md:mb-10">
          <h5 className="font-bold mb-2 text-[#7e9cae] md:text-lg">
            Number of Players
          </h5>
          <div className="flex justify-between">
            <button
              onClick={handleOnePlayer}
              className={`${
                playersNumber === 1
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-16 py-2 rounded-3xl font-bold md:w-32 md:py-3 md:text-xl`}
            >
              1
            </button>
            <button
              onClick={() => handlePlayerNumber(2)}
              className={`${
                playersNumber === 2
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-16 py-2 rounded-3xl font-bold md:w-32 md:py-3 md:text-xl`}
            >
              2
            </button>
            <button
              onClick={() => handlePlayerNumber(3)}
              className={`${
                playersNumber === 3
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-16 py-2 rounded-3xl font-bold md:w-32 md:py-3 md:text-xl`}
            >
              3
            </button>
            <button
              onClick={() => handlePlayerNumber(4)}
              className={`${
                playersNumber === 4
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-16 py-2 rounded-3xl font-bold md:w-32 md:py-3 md:text-xl`}
            >
              4
            </button>
          </div>
        </div>

        <div className="mb-6 md:mb-10">
          <h5 className="font-bold mb-2 text-[#7e9cae] md:text-lg">
            Grid Size
          </h5>
          <div className="flex justify-between">
            <button
              onClick={() => handleGridSize(4)}
              className={`${
                gridSize === 4
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-32 py-2 rounded-3xl font-bold md:w-64 md:py-3 md:text-xl`}
            >
              4x4
            </button>
            <button
              onClick={() => handleGridSize(6)}
              className={`${
                gridSize === 6
                  ? `bg-dark-blue`
                  : `bg-gray-button hover:bg-gray-hover`
              } w-32 py-2 rounded-3xl font-bold md:w-64 md:py-3 md:text-xl`}
            >
              6x6
            </button>
          </div>
        </div>

        <Link to="/game">
          <button className="bg-orange w-full py-2 font-bold rounded-2xl md:py-3 hover:bg-orange-hover">
            start game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartBoard;
