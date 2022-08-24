import React from "react";
import StartBoard from "../components/StartBoard";

const StartGame = () => {

  return (
    <div className="bg-main-bg h-screen py-4">
      <h1 className="text-3xl font-bold flex justify-center items-center h-[10rem] md:text-4xl">
        memory
      </h1>
      <div className="flex justify-center items-center">
        <StartBoard />
      </div>
    </div>
  );
};

export default StartGame;
