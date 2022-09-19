/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  gridTypes,
  playersNumberTypes,
  themeTypes,
  TimeTaken,
} from "../@types/stateTypes";
import { useStateContext } from "../contexts/ContextProvider";
import "../styles.css";
import { generateRandom, handleTurn } from "../utils/utils";

interface Props {
  theme: themeTypes;
  gridSize: gridTypes;
  setShowEndModal: React.Dispatch<React.SetStateAction<boolean>>;
  playersNumber: playersNumberTypes;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
  turn: number;
  setTurn: React.Dispatch<React.SetStateAction<number>>;
  matched: number;
  setMatched: React.Dispatch<React.SetStateAction<number>>;
  restart: boolean;
  pause: () => void;
  setTimeTaken: React.Dispatch<React.SetStateAction<TimeTaken>>;
  minutes: number;
  seconds: number;
}

const Board = ({
  theme,
  gridSize,
  setShowEndModal,
  playersNumber,
  setMoves,
  turn,
  setTurn,
  matched,
  setMatched,
  restart,
  pause,
  setTimeTaken,
  minutes,
  seconds,
}: Props) => {
  const [, dispatch] = useStateContext();

  // function to update player score
  const updatePlayerScore = (id: number) => {
    playersNumber > 1 &&
      dispatch({
        type: "UPDATE_PLAYER_SCORE",
        payload: { id: id },
      });
  };

  // generate array of random numbers or icons based on theme
  const memoryArray =
    theme === "numbers"
      ? useMemo(
          () => generateRandom(gridSize === 4 ? 8 : 18, "numbers"),
          [gridSize, restart]
        )
      : useMemo(
          () => generateRandom(gridSize === 4 ? 8 : 18, "icons"),
          [gridSize, restart]
        );

  // store ids of each number in memoryArray
  const arrayIds = [...Array(memoryArray.length).keys()].map((i) =>
    i.toString()
  );

  // show endModal when matched all boxes have been matched
  useEffect(() => {
    if (matched === memoryArray.length / 2) {
      setShowEndModal(true);
      pause();
      setTimeTaken({ minutes, seconds });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matched]);

  // array to store ids of clicked boxes
  const [boxesPicked, setBoxesPicked] = useState<number[]>([]);

  const handleBoxClick = (_id: string) => () => {
    let id = parseInt(_id); // convert id to number

    // prevent user click on the same box twice and prevent a third box click
    if (boxesPicked.slice(-1)[0] !== id && boxesPicked.length < 2) {
      // store clicked boxes in boxesPicked and open them
      boxesPicked.push(id);
      document.getElementById(_id)!.style.background = "#fda214";
      document.getElementById(_id)!.style.color = "white";

      if (boxesPicked.length > 1) {
        // update moves and turns based on number of players
        playersNumber === 1
          ? setMoves((moves) => moves + 1)
          : setTimeout(() => {
              setTurn((turn) => handleTurn(turn, playersNumber));
            }, 500);

        // if boxes picked match
        if (memoryArray[boxesPicked[0]] === memoryArray[id]) {
          // update player's score and change bg of matched boxes
          updatePlayerScore(turn);
          setTimeout(() => {
            boxesPicked.forEach((matchedBox) => {
              document.getElementById(
                matchedBox.toString()
              )!.style.backgroundColor = "#bcced9";
            });
            boxesPicked.length = 0; // empty array of boxes picked
          }, 500);

          // increment number of matched boxes
          setMatched((matched) => matched + 1);

          // if boxes picked don't match
        } else {
          // close boxes
          setTimeout(() => {
            boxesPicked.forEach((box) => {
              document.getElementById(box.toString())!.style.color =
                "transparent";
              document.getElementById(box.toString())!.style.background =
                "#304859";
            });
            // empty boxes picked array
            boxesPicked.length = 0;
          }, 500);
        }
      }
    }
  };

  const [screenSize, setScreenSize] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const boxSizes = {
    four: { small: 4.3, large: 7, container: 4.5 * 4 + 5 },
    six: { small: 2.7, large: 5, container: 3 * 4 + 5 },
  };

  const boxWidth =
    screenSize < 768
      ? gridSize === 4
        ? boxSizes.four.small
        : boxSizes.six.small
      : gridSize === 4
      ? boxSizes.four.large
      : boxSizes.six.large;

  const font =
    screenSize < 768
      ? gridSize === 4
        ? "2.5rem"
        : "1.75rem"
      : gridSize === 4
      ? "3.75rem"
      : "3rem";

  return (
    <>
      <div
        className="box-container"
        style={{
          width: `${gridSize === 4 ? boxWidth * 4 + 5 : boxWidth * 6 + 7}rem`,
        }}
      >
        {arrayIds.map((i) => (
          <div
            key={i}
            style={{ width: `${boxWidth}rem`, height: `${boxWidth}rem` }}
            className="box"
            onClick={handleBoxClick(i)}
          >
            <div id={i} className="inner" style={{ fontSize: font }}>
              {theme === "numbers" ? (
                <>{memoryArray[parseInt(i)]}</>
              ) : (
                <FontAwesomeIcon icon={memoryArray[parseInt(i)]} />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
