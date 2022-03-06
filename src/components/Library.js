import React from "react";
import LibrarySong from "./LibrarySong";
function Library({ songs, setCurrentSong, audioRef, currentSong, isLibOpen }) {
  return (
    <div className={`library-container ${isLibOpen ? "open-library" : ""}`}>
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
