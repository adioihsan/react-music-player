import React, { useEffect, useRef } from "react";
function Song({ currentSong, isPlaying }) {
  const albumCoverRef = useRef(null);
  useEffect(() => {
    const albumCover = albumCoverRef.current;
    if (isPlaying) albumCover.classList.add("spin");
    else albumCover.classList.remove("spin");
  }, [isPlaying]);
  return (
    <div className="song-container">
      <img
        className="album-cover"
        src={currentSong.cover}
        alt="album-cover"
        ref={albumCoverRef}
      />
      <h1 className="song-title">{currentSong.title}</h1>
      <h2 className="song-artist">{currentSong.artist}</h2>
    </div>
  );
}

export default Song;
