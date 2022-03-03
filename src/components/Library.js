import React, { useEffect, useRef } from "react";
import LibrarySong from "./LibrarySong";
function Library({ songs }) {
  const albumCoverRef = useRef(null);
  return (
    <div className="library-container">
      {songs.map((song) => (
        <LibrarySong song={song} />
      ))}
    </div>
  );
}

export default Library;
