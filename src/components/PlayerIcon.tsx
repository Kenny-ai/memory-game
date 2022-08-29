import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { motion } from "framer-motion";
import "../styles.css";

interface Props {
  id: number;
  mobileName: string;
  desktopName: string;
  turn: number;
  score: number;
}

const PlayerIcon = ({ id, mobileName, desktopName, turn, score }: Props) => {
  return (
    <motion.div
      className={`${
        turn === id ? `bg-orange text-white-text` : `bg-button-inactive`
      } flex flex-col justify-center items-start w-16 p-3 rounded-lg h-fit md:w-32 player-icon`}
    >
      <h5
        className={`md:hidden ${turn !== id ? `text-gray-text` : ``} font-bold`}
      >
        {mobileName}
      </h5>

      <h5
        className={`hidden md:block ${
          turn !== id ? `text-gray-text` : ``
        } font-bold`}
      >
        {desktopName}
      </h5>
      <p
        className={`${turn !== id ? `text-[#31495a]` : ``} font-bold text-2xl`}
      >
        {score}
      </p>
    </motion.div>
  );
};

export default PlayerIcon;
