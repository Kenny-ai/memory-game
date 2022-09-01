import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Icons = () => {

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

  const ind = iconArray.indexOf(faEgg);

  return (
    <div className='text-orange'>
      {iconArray.map(icon => <FontAwesomeIcon icon={icon} />)}
    </div>
  )
}

export default Icons