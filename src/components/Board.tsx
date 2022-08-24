import React, { useEffect, useLayoutEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import "../styles.css";
import { generateRandom } from "../utils/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function Board() {
  const { gridSize, setMoves, turn, setTurn, playersNumber, turnArray } =
    useStateContext();

  const [array, setArray] = useState(generateRandom(gridSize === 4 ? 8 : 18));

  const arrayIds = [...Array(array.length).keys()].map((i) => i.toString());

  const [score, setScore] = useState(0);

  // array to store ids of clicked boxes
  const [arr, setArr] = useState<string[]>([]);

  const handleClick = (id: string) => {
    // prevent user click on the same box twice and prevent a third box click
    if (arr[arr.length - 1] !== id && arr.length < 2) {
      // add picked ids to the array and open the boxes
      arr.push(id);
      document.getElementById(id)!.style.background = "#fda214";
      document.getElementById(id)!.style.color = "white";

      if (arr.length > 1) {
        playersNumber === 1 && setMoves((moves) => moves + 1);
        setTimeout(() => {
          setTurn(turnArray[(turnArray.indexOf(turn) + 1) % playersNumber]);
        }, 500);
        if (array[parseInt(arr[0])] === array[parseInt(id)] && arr.length > 1) {
          setScore((score) => score + 1);
          setTimeout(() => {
            arr.forEach((i) => {
              document.getElementById(i)!.style.backgroundColor = "#bcced9";
            });
            arr.length = 0;
          }, 500);
        } else {
          setTimeout(() => {
            arr.forEach((i) => {
              document.getElementById(i)!.style.color = "transparent";
              document.getElementById(i)!.style.background = "#304859";
            });
            arr.length = 0;
          }, 500);
        }
      }
    }
  };

  const [size, setSize] = useState(0);

  const boxSizes = {
    four: { small: 4.5, large: 7, container: 4.5 * 4 + 5 },
    six: { small: 3, large: 5, container: 3 * 4 + 5 },
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // console.log(size);
  }, []);

  const boxWidth =
    size < 768
      ? gridSize === 4
        ? boxSizes.four.small
        : boxSizes.six.small
      : gridSize === 4
      ? boxSizes.four.large
      : boxSizes.six.large;

  return (
    <div className="">
      {/* <h1 className="text-xl font-bold uppercase">Score: {score}</h1> */}
      <p className="text-xl text-red-400">{turn}</p>
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
            onClick={() => handleClick(i)}
          >
            <div id={i} className="inner">
              {array[parseInt(i)]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
