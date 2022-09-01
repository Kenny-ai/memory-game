import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { playersNumberTypes } from "../@types/stateTypes";
import PlayerIcon from "../components/PlayerIcon";
import { useStateContext } from "../contexts/ContextProvider";

interface Props {
  board: React.ReactNode;
  playersNumber: playersNumberTypes;
  moves: number;
  turn: number;
  handleRestart: () => void;
  handleNewGame: () => void;
  timerBox: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  pause: () => void;
}

const Game = ({
  board,
  playersNumber,
  moves,
  turn,
  handleRestart,
  handleNewGame,
  timerBox,
  setShowModal,
  pause,
}: Props) => {
  const handleShowMenuModal = () => {
    setShowModal(true);
    pause();
  };

  const navigate = useNavigate();

  const [state, dispatch] = useStateContext();
  useLayoutEffect(() => {
    dispatch({
      type: "CLEAR_PLAYER_SCORES",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-6 h-screen flex flex-col">
      <header className="flex justify-between items-center flex-[0.1]">
        <h5 className="text-black text-2xl font-bold md:text-4xl">memory</h5>
        <div className="flex gap-4">
          <button
            onClick={handleShowMenuModal}
            className="md:hidden bg-orange py-2 w-16 font-bold rounded-3xl cursor-pointer hover:bg-orange-hover"
          >
            menu
          </button>

          <button
            onClick={handleRestart}
            className="bg-orange py-2 px-6 text-xl font-bold rounded-3xl cursor-pointer hover:bg-orange-hover hidden md:block"
          >
            Restart
          </button>
          <button
            onClick={() => {
              navigate("/");
              handleNewGame();
            }}
            className="bg-gray-button py-2 px-6 text-xl font-bold rounded-3xl cursor-pointer hover:bg-gray-hover hover:text-white-text text-[#31495a] hidden md:block"
          >
            New Game
          </button>
        </div>
      </header>
      <div className="flex-[0.75] flex justify-center items-center">
        {board}
      </div>

      {playersNumber > 1 ? (
        <div className="flex-[0.15] flex justify-between items-end md:w-[35rem] md:m-auto">
          {state.playerDetails!.map((player) => (
            <PlayerIcon
              key={player.id}
              id={player.id}
              mobileName={player.mobileName}
              desktopName={player.desktopName}
              turn={turn}
              score={player.score}
            />
          ))}
        </div>
      ) : (
        <div className="flex-[0.15] flex justify-between items-end md:w-[35rem] md:m-auto">
          {timerBox}

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
