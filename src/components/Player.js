import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Player() {
  return (
    <div className="player-container">
      <div className="player-timer">
        <p className="start-time">0</p>
        <input type="range" name="playing-time" id="playing-time" />
        <p className="end-time">3:00</p>
      </div>
      <div className="player-controller">
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        <FontAwesomeIcon icon={faPlay} size="2x" id="btn-play" />
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </div>
    </div>
  );
}
export default Player;
