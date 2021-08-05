import {useContext} from "react";
import {v4 as uuidv4} from "uuid";

import {SongLibraryContext} from "../hooks/SongLibraryContext";
import {SongContext} from "../hooks/SongsContext";
import {ThemeContext} from "../hooks/ThemeContext";

import LibrarySong from "./LibrarySong";

function LibrarySongList() {

  const { libraryIsVisible } = useContext(SongLibraryContext);
  const { songs } = useContext(SongContext);
  const { isThemeLight } = useContext(ThemeContext);

  return (
    <ul 
      className={libraryIsVisible ? "songs-library open-lib" : isThemeLight ? "songs-library light" : "songs-library dark"}
    >
      {
        songs.map( (song) => (<LibrarySong song={song} key={uuidv4()} />) )
      }
    </ul>
  );
}

export default LibrarySongList;
