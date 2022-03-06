// Import components
import { useState, useRef } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import Nav from "./components/Nav";

// import styles
import "./styles/app.scss";
import data from "./util";
function App() {
  // Refs
  const audioRef = useRef(null);
  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibOpen, setIsLibOpen] = useState(false);
  return (
    <div className="App">
      <Nav isLibOpen={isLibOpen} setIsLibOpen={setIsLibOpen} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        songs={songs}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        currentSong={currentSong}
        isLibOpen={isLibOpen}
      />
    </div>
  );
}

export default App;
