import {useContext} from "react";

import {SongLibraryContext} from "../hooks/SongLibraryContext";
import {SongContext} from "../hooks/SongsContext";
import {AudioContext} from "../hooks/AudioContext";
import {ThemeContext} from "../hooks/ThemeContext";

// create song profile component
const LibrarySong = (song) => {

  const {activeSongUpdate } = useContext(SongLibraryContext);
  const {songs, setPlayingSong, songIsPlaying} = useContext(SongContext);
  const audioRef = useContext(AudioContext);
  const {isThemeLight} = useContext(ThemeContext);

  //state functions
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((track) => track.id === song.song.id);
    activeSongUpdate(song);

    await setPlayingSong({
      info: selectedSong[0],
      length: 0,
      playedLength: 0,
      playedLengthPercentage: 0
    })

    if( songIsPlaying ){
        audioRef.current.play()
    }
    
  }

  return (
    <li
      key={song.song.id}
      onClick={songSelectHandler}
      // onDoubleClick={setLibrabryVisisbility(false)}
      // className={`library-song-card ${song.song.active ? "selected" : ""} ${ isThemeLight ? "light" : "dark" }`}
      className={ song.song.active ? "library-song-card selected": isThemeLight ? "library-song-card light" : "library-song-card dark" }
    >
        <div className="card-artwork">
          <img src={song.song.artwork} alt="artwork"></img>
        </div>
        <div className="card-song-details">
          <h3>{song.song.song_title}</h3>
          <h4>{song.song.artists}</h4>
        </div>
    </li>
  )
}

export default LibrarySong;
