import React from "react";
function LibrarySong({ song, currentSong, setCurrentSong, audioRef }) {
  function songSelectHandler() {
    currentSong.active = false;
    song.active = true;
    setCurrentSong(song);
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
  return (
    <div
      className={`library-song-container ${song.active ? "active-song" : " "}`}
      onClick={songSelectHandler}
    >
      <img className="album-cover" src={song.cover} alt="album-cover" />
      <h1 className="song-title">{song.title}</h1>
      <h2 className="song-artist">{song.artist}</h2>
    </div>
  );
}

export default LibrarySong;
