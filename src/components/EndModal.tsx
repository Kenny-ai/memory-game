import React from "react";
import { playersNumberTypes, TimeTaken } from "../@types/stateTypes";
import { useStateContext } from "../contexts/ContextProvider";
import { getWinnersArray } from "../utils/utils";

interface Props {
  playersNumber: playersNumberTypes;
  moves: number;
  handleRestart: () => void;
  handleNewGame: () => void;
  displayTimer: (minutes: number, seconds: number) => JSX.Element;
  timeTaken: TimeTaken;
}

const EndModal = ({
  playersNumber,
  moves,
  handleRestart,
  handleNewGame,
  displayTimer,
  timeTaken,
}: Props) => {
  const [state] = useStateContext();
  const scoreArray = state.playerDetails.map((player) => player.score);

  const winnersArray = getWinnersArray(scoreArray);

  const getResult = () => {
    let message = "";
    const winIds = state.playerDetails
      .filter((player) => player.score === winnersArray[0])
      .map((i) => i.id);
    if (winnersArray.length > 1) {
      message = "It's a tie!";
    } else {
      message = `Player ${
        state.playerDetails.filter((player) => player.id === winIds[0])[0].id
      } wins!`;
    }
    return { winIds, message };
  };

  const result: { winIds?: number[]; message?: string } =
    playersNumber > 1 ? getResult() : {};

  return playersNumber === 1 ? (
    <div className="relative h-screen">
      <div className="h-screen bg-black opacity-50 cursor-pointer"></div>

      <div className="end-modal-board w-[20rem] h-fit bg-[#f2f2f2] p-6 rounded-xl flex justify-center items-center md:w-[40rem] md:p-16">
        <div className="flex flex-col gap-4 w-full md:gap-16">
          <div className="flex flex-col justify-center items-center md:gap-1">
            <h3 className="text-black-text text-2xl font-bold md:text-5xl">
              You did it!
            </h3>
            <p className="text-gray-text font-bold text-sm md:text-lg">
              Game over! Here's how you got on...
            </p>
          </div>

          <div className="flex flex-col gap-2 md:w-1/2 md:m-auto">
            <div className="flex justify-between items-center bg-button-inactive rounded-lg p-2">
              <p className="text-gray-text font-bold text-sm">Time Elapsed</p>

              <>{displayTimer(timeTaken.minutes, timeTaken.seconds)}</>
            </div>

            <div className="flex justify-between items-center bg-button-inactive rounded-lg p-2">
              <p className="text-gray-text font-bold text-sm">Moves taken</p>
              <p className="text-black-text text-xl font-bold">{moves} Moves</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:flex-row">
            <button
              onClick={handleRestart}
              className="bg-orange font-bold w-full py-2 rounded-full text-lg hover:bg-orange-hover"
            >
              Restart
            </button>
            <button
              onClick={handleNewGame}
              className="bg-button-inactive text-black-text font-bold w-full py-2 rounded-full text-lg hover:bg-gray-hover hover:text-white-text"
            >
              Setup New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative h-screen">
      <div className="h-screen bg-black opacity-50 cursor-pointer"></div>

      <div className="end-modal-board w-[20rem] h-fit bg-[#f2f2f2] p-6 rounded-xl flex justify-center items-center md:w-[40rem] md:p-16">
        <div className="flex flex-col gap-4 w-full md:gap-16">
          <div className="flex flex-col justify-center items-center md:gap-1">
            <h3 className="text-black-text text-2xl font-bold md:text-5xl">
              {result.message}
            </h3>
            <p className="text-gray-text font-bold text-sm md:text-lg">
              Game over! Here are the results...
            </p>
          </div>

          {/* winner will have bg color #304859 and white text */}
          <div className="flex flex-col gap-2 md:w-1/2 md:m-auto">
            {state.playerDetails.map((player) => (
              <div
                key={player.id}
                className={`${
                  result.winIds![0] === player.id
                    ? `bg-dark-blue text-white-text`
                    : `text-gray-text bg-button-inactive`
                } flex justify-between items-center  rounded-lg p-2`}
              >
                <p className="font-bold text-sm">
                  {`${player.desktopName} ${
                    result.winIds![0] === player.id &&
                    result.winIds!.length === 1
                      ? ` (Winner)`
                      : ``
                  }`}
                </p>
                <p className="text-xl font-bold">{player.score} Pairs</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 md:flex-row">
            <button
              onClick={handleRestart}
              className="bg-orange font-bold w-full py-2 rounded-full text-lg hover:bg-orange-hover"
            >
              Restart
            </button>
            <button
              onClick={handleNewGame}
              className="bg-button-inactive text-black-text font-bold w-full py-2 rounded-full text-lg hover:bg-gray-hover hover:text-white-text"
            >
              Setup New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndModal;
