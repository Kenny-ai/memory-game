import React, { useState } from "react";
import Board from "./components/Board";
import StartGame from "./screens/StartGame";
import "./App.css";
import Game from "./screens/Game";
import Modal from "./components/MenuModal";
import { useStateContext } from "./contexts/ContextProvider";
import EndModal from "./components/EndModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const { showGame } = useStateContext();

  return (
    <div className="app text-white-text relative">
      {/* <Board /> */}
      {showGame && <Game handleShowModal={handleShowModal} />}
      {/* <Modal /> */}
      {!showGame && <StartGame />}

      {/* <EndModal /> */}

      {showModal && (
        <div className="md:hidden absolute top-0 w-full">
          <Modal setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default App;
