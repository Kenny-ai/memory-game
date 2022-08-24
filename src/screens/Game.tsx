import { useState } from "react";
import { playersNumberTypes } from "../@types/model";
import Board from "../components/Board";
import PlayerIcon from "../components/PlayerIcon";
import { useStateContext } from "../contexts/ContextProvider";

interface Props {
  handleShowModal: () => void;
}

const Game = ({ handleShowModal }: Props) => {
  const { moves, playersNumber, turnArray } = useStateContext();

  return (
    <div className="p-6 h-screen flex flex-col">
      <header className="flex justify-between items-center flex-[0.1]">
        <h5 className="text-black text-2xl font-bold md:text-4xl">memory</h5>
        <div className="flex gap-4">
          <button
            onClick={handleShowModal}
            className="md:hidden bg-orange py-2 w-16 font-bold rounded-3xl cursor-pointer hover:bg-orange-hover"
          >
            menu
          </button>
          <button className="bg-orange py-2 px-6 text-xl font-bold rounded-3xl cursor-pointer hover:bg-orange-hover hidden md:block">
            Restart
          </button>
          <button className="bg-gray-button py-2 px-6 text-xl font-bold rounded-3xl cursor-pointer hover:bg-gray-hover hover:text-white-text text-[#31495a] hidden md:block">
            New Game
          </button>
        </div>
      </header>
      <div className="flex-[0.75] flex justify-center items-center">
        <Board />
      </div>
      <p className="text-black">{turnArray}</p>

      {playersNumber > 1 ? (
        <div className="flex-[0.15] flex justify-between items-end md:w-[35rem] md:m-auto">
          {turnArray.map((i) => (
            <PlayerIcon num={i} />
          ))}
          </div>
      ) : (
        <div className="flex-[0.15] flex justify-between items-end md:w-[35rem] md:m-auto">
          <div className="bg-button-inactive flex flex-col justify-center items-center w-32 py-2 rounded-lg h-fit">
            <h5 className="text-gray-text font-bold">Time</h5>
            <p className="text-[#31495a] font-bold text-2xl">0</p>
          </div>

          <div className="bg-button-inactive flex flex-col justify-center items-center w-32 py-2 rounded-lg h-fit">
            <h5 className="text-gray-text font-bold">Moves</h5>
            <p className="text-[#31495a] font-bold text-2xl">{moves}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
