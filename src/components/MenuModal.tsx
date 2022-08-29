import React from "react";
import "../styles.css";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleRestart: () => void;
  handleNewGame: () => void;
  start: () => void;
}

const MenuModal = ({ setShowModal, handleRestart, handleNewGame, start }: Props) => {
  const handleCloseModal = () => {
    setShowModal(false);
    start();
  };
  return (
    <div className="relative h-screen">
      <div
        onClick={handleCloseModal}
        className="h-screen bg-black opacity-50 cursor-pointer"
      ></div>

      <div className="menu-modal-board w-[20rem] h-[15rem] bg-white p-6 rounded-xl flex flex-col gap-6">
        <button
          onClick={handleRestart}
          className="bg-orange font-bold w-full py-2 rounded-full text-lg hover:bg-orange-hover"
        >
          Restart
        </button>
        <button
          onClick={handleNewGame}
          className="bg-button-inactive text-[#31495a] font-bold w-full py-2 rounded-full text-lg hover:bg-gray-hover"
        >
          New Game
        </button>
        <button
          onClick={handleCloseModal}
          className="bg-button-inactive text-[#31495a] font-bold w-full py-2 rounded-full text-lg hover:bg-gray-hover"
        >
          Resume Game
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
