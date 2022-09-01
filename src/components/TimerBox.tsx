import React, { useEffect } from "react";

interface Props {
  seconds: number;
  minutes: number;
  start: () => void;
  reset: () => void;
  pause: () => void;
  displayTimer: (minutes: number, seconds: number) => JSX.Element;
}

const TimerBox = ({ seconds, minutes, reset, displayTimer }: Props) => {
  useEffect(() => {
    reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-button-inactive flex flex-col justify-center items-center w-32 py-2 rounded-lg h-fit">
      <h5 className="text-gray-text font-bold">Time</h5>
      <>{displayTimer(minutes, seconds)}</>
    </div>
  );
};

export default TimerBox;
