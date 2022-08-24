import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { motion } from "framer-motion";
import "../styles.css";

interface Props {
  num: number;
}

const PlayerIcon = ({ num }: Props) => {
  const { turn } = useStateContext();
  return (
    <motion.div
      className={`${
        turn === num ? `bg-orange text-white-text` : `bg-button-inactive`
      } flex flex-col justify-center items-start w-16 p-3 rounded-lg h-fit md:w-32 player-icon`}
    >
      <h5
        className={`md:hidden ${
          turn !== num ? `text-gray-text` : ``
        } font-bold`}
      >
        P{num}
      </h5>

      <h5
        className={`hidden md:block ${
          turn !== num ? `text-gray-text` : ``
        } font-bold`}
      >
        Player {num}
      </h5>
      <p
        className={`${turn !== num ? `text-[#31495a]` : ``} font-bold text-2xl`}
      >
        0
      </p>
    </motion.div>
  );
};

export default PlayerIcon;
