import React, { useEffect, useRef } from "react";
import LibrarySong from "./LibrarySong";
function Library({ songs, setCurrentSong, audioRef, currentSong }) {
  const albumCoverRef = useRef(null);
  return (
    <div className="library-container">
      {songs.map((song) => (
        <LibrarySong
          song={song}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          currentSong={currentSong}
          key={song.id}
        />
      ))}
    </div>
  );
}

export default Library;
