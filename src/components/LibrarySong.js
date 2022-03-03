import React, { useRef } from "react";
function LibrarySong({ song }) {
  const albumCoverRef = useRef(null);
  return (
    <div className="library-song-container">
      <img
        className="album-cover"
        src={song.cover}
        alt="album-cover"
        ref={albumCoverRef}
      />
      <h1 className="song-title">{song.title}</h1>
      <h2 className="song-artist">{song.artist}</h2>
    </div>
  );
}

export default LibrarySong;
