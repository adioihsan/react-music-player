import React, { useRef } from "react";
function LibrarySong({ song, currentSong, setCurrentSong, audioRef }) {
  // refs
  const songContainerRef = useRef(null);
  function songSelectHandler() {
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

  function playSong() {}
  return (
    <div
      className={`library-song-container ${song.active ? "active" : " "}`}
      ref={songContainerRef}
      onClick={songSelectHandler}
    >
      <img className="album-cover" src={song.cover} alt="album-cover" />
      <h1 className="song-title">{song.title}</h1>
      <h2 className="song-artist">{song.artist}</h2>
    </div>
  );
}

export default LibrarySong;
