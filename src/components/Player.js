import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Player({
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  songs,
}) {
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
  function skipTrackHandler(direction) {
    let currentIndex = songs.indexOf(currentSong);
    let nextIndex = (currentIndex + 1) % songs.length; // you can achieve next index using modulus like this, or write it manualy :  currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
    let prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    if (direction === "next-song") {
      changeSong(currentSong, songs[nextIndex]);
    } else {
      // direction === "prev-song"
      changeSong(currentSong, songs[prevIndex]);
    }
  }
  function changeSong(currentSong, song) {
    currentSong.active = false;
    song.active = true;
    setCurrentSong(song);
    song.active = true;
    if (!audioRef.current.paused) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  }
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <div className="player-container">
      <div className="player-timer">
        <p className="start-time">{formatTime(songTime.currentTime)}</p>
        <input
          type="range"
          name="playing-time"
          id="playing-time"
          value={songTime.currentTime}
          min="0"
          max={songTime.duration}
          onInput={(e) => dragHandler(e)}
        />
        <p className="end-time">{formatTime(songTime.duration)}</p>
      </div>
      <div className="player-controller">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2x"
          onClick={() => skipTrackHandler("prev-song")}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          id="btn-play"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2x"
          onClick={() => skipTrackHandler("next-song")}
        />
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
