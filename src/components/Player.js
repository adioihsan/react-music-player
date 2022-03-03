import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";

function Player({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) {
  // Refs
  const audioRef = useRef(null);
  //state
  const [songTime, setSongTime] = useState({
    duration: 0,
    currentTime: 0,
  });
  // Event Handlers
  const playSongHandler = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  function timeHanlder() {
    setSongTime({ ...songTime, currentTime: audioRef.current.currentTime });
  }
  function onSongLoaded() {
    setSongTime({ ...songTime, duration: audioRef.current.duration });
  }
  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  }
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  function nextSong() {}
  return (
    <div className="player-container">
      <div className="player-timer">
        <p className="start-time">{getTime(songTime.currentTime)}</p>
        <input
          type="range"
          name="playing-time"
          id="playing-time"
          value={songTime.currentTime}
          min="0"
          max={songTime.duration}
          onInput={(e) => dragHandler(e)}
        />
        <p className="end-time">{getTime(songTime.duration)}</p>
      </div>
      <div className="player-controller">
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          id="btn-play"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </div>
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeHanlder}
        onLoadedMetadata={onSongLoaded}
      ></audio>
    </div>
  );
}
export default Player;
