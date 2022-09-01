import React, { useLayoutEffect, useState } from "react";
import Board from "./components/Board";
import StartGame from "./screens/StartGame";
import "./App.css";
import Game from "./screens/Game";
import MenuModal from "./components/MenuModal";
import EndModal from "./components/EndModal";
import StartBoard from "./components/StartBoard";
import {
  gridTypes,
  playersNumberTypes,
  themeTypes,
  TimeTaken,
} from "./@types/stateTypes";
import { useStateContext } from "./contexts/ContextProvider";
import { Route, Routes } from "react-router-dom";
import TimerBox from "./components/TimerBox";
import { useStopwatch } from "react-timer-hook";

const App = () => {
  const [, dispatch] = useStateContext();

  const [theme, setTheme] = useState<themeTypes>("numbers");
  const [playersNumber, setPlayersNumber] = useState<playersNumberTypes>(1);
  const [gridSize, setGridSize] = useState<gridTypes>(4);

  const [moves, setMoves] = useState(0);
  const [turn, setTurn] = useState(1);
  const [matched, setMatched] = useState(0);

  const [restart, setRestart] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  useLayoutEffect(() => {
    let storedNumber = localStorage.getItem("numOfPlayers")!;
    setPlayersNumber(JSON.parse(storedNumber));
    let storedGridSize = localStorage.getItem("gridSize")!;
    setGridSize(JSON.parse(storedGridSize));
    // let storedTheme = localStorage.getItem("theme")!;
    // setTheme(JSON.parse(storedTheme));
  }, []);

  const closeModal = () => {
    showModal && setShowModal(false);
    showEndModal && setShowEndModal(false);
  };

  const handleRestart = () => {
    setTimeout(() => {
      setRestart((restart) => !restart);
      setTurn(1);
      setMatched(0);
      setMoves(0);
    }, 500);
    dispatch({
      type: "CLEAR_PLAYER_SCORES",
    });
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
      document.getElementById(i.toString())!.style.color = "transparent";
      document.getElementById(i.toString())!.style.background = "transparent";
    }
    closeModal();
    reset();
  };

  const handleNewGame = () => {
    setTurn(1);
    setMatched(0);
    setMoves(0);
    setRestart(false);
    closeModal();
  };

  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: true,
  });

  const displayTimer = (minutes: number, seconds: number) => {
    return (
      <p className="text-[#31495a] font-bold text-2xl">
        <span>{minutes}</span>:{seconds < 10 && <span>0</span>}
        <span>{seconds}</span>
      </p>
    );
  };

  const [timeTaken, setTimeTaken] = useState<TimeTaken>({
    minutes: 0,
    seconds: 0,
  });

  return (
    <div className="app text-white-text relative">
      <Routes>
        <Route
          path="/"
          element={
            <StartGame
              startBoard={
                <StartBoard
                  gridSize={gridSize}
                  setGridSize={setGridSize}
                  theme={theme}
                  setTheme={setTheme}
                  playersNumber={playersNumber}
                  setPlayersNumber={setPlayersNumber}
                  handleNewGame={handleNewGame}
                />
              }
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              board={
                <Board
                  theme={theme}
                  restart={restart}
                  matched={matched}
                  setMatched={setMatched}
                  gridSize={gridSize}
                  setShowEndModal={setShowEndModal}
                  playersNumber={playersNumber}
                  setMoves={setMoves}
                  turn={turn}
                  setTurn={setTurn}
                  pause={pause}
                  setTimeTaken={setTimeTaken}
                  minutes={minutes}
                  seconds={seconds}
                />
              }
              moves={moves}
              turn={turn}
              playersNumber={playersNumber}
              handleRestart={handleRestart}
              handleNewGame={handleNewGame}
              timerBox={
                <TimerBox
                  minutes={minutes}
                  seconds={seconds}
                  start={start}
                  pause={pause}
                  reset={reset}
                  displayTimer={displayTimer}
                />
              }
              setShowModal={setShowModal}
              pause={pause}
            />
          }
        />
      </Routes>

      {showModal && (
        <div className="absolute top-0 w-full">
          <MenuModal
            setShowModal={setShowModal}
            handleRestart={handleRestart}
            handleNewGame={handleNewGame}
            start={start}
          />
        </div>
      )}

      {showEndModal && (
        <div className="absolute top-0 w-full">
          <EndModal
            moves={moves}
            playersNumber={playersNumber}
            handleRestart={handleRestart}
            handleNewGame={handleNewGame}
            displayTimer={displayTimer}
            timeTaken={timeTaken}
          />
        </div>
      )}
    </div>
  );
};

export default App;
