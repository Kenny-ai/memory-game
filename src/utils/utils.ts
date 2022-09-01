import { playersNumberTypes, themeTypes } from "../@types/stateTypes";
import {
  faAnchor,
  faAnkh,
  faBiohazard,
  faBinoculars,
  faGolfBall,
  faBowlingBall,
  faBaseballBall,
  faFootballBall,
  faBasketballBall,
  faVolleyballBall,
  faBell,
  faBrain,
  faBurn,
  faCat,
  faCircle,
  faCog,
  faCogs,
  faDog,
  faDragon,
  faEgg,
} from "@fortawesome/free-solid-svg-icons";

const iconArray = [
  faAnchor,
  faAnkh,
  faBiohazard,
  faBinoculars,
  faGolfBall,
  faBowlingBall,
  faBaseballBall,
  faFootballBall,
  faBasketballBall,
  faVolleyballBall,
  faBell,
  faBrain,
  faBurn,
  faCat,
  faCircle,
  faCog,
  faCogs,
  faDog,
  faDragon,
  faEgg,
];

const shuffle = (array: any[]) => {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

export const generateRandom = (n: number, theme: themeTypes) => {
  let output = [];
  for (let i = 0; i < 2; i++) {
    let m = n,
      array = [...Array(m + 1).keys()].slice(1),
      arr = [],
      randomNum: any,
      removed: any,
      randomIcon,
      icons = iconArray.slice(0, n);
    while (m > 0) {
      if (theme === "numbers") {
        randomNum = Math.floor(Math.random() * m);
        removed = array.splice(array.indexOf(randomNum), 1).pop()!;
      } else {
        randomIcon = icons[Math.floor(Math.random() * m)];
        removed = icons.splice(icons.indexOf(randomIcon), 1).pop()!;
      }
      arr.push(removed);
      m--;
    }
    output.push(...arr);
  }
  return shuffle(output);
};

export const handleTurn = (
  currentTurn: number,
  numOfPlayers: playersNumberTypes
) => {
  const turnArray = [...Array(numOfPlayers + 1).keys()].slice(1);
  return currentTurn === numOfPlayers
    ? 1
    : turnArray[(turnArray.indexOf(currentTurn) + 1) % numOfPlayers];
};

export const getWinnersArray = (array: number[]) => {
  let sorted = array.sort((a, b) => b - a);
  let max = sorted.filter((i) => i === sorted[0]);
  return max;
};
