import {useContext} from "react";

import {SongContext} from "../hooks/SongsContext";
import {SongLibraryContext} from "../hooks/SongLibraryContext";

const SongProfile = () => {

  const { playingSong } = useContext(SongContext);
  const { setLibrabryVisisbility } = useContext(SongLibraryContext);
  
  return (
    <div 
        className="song-container" 
        onClick={ () => setLibrabryVisisbility(false) } 
    >
      <div  style={{ width:"100%", height:"100%", backdropFilter: "blur(4px)", display: "flex", flexDirection:"column",justifyContent:"center", alignItems:"center" }} >
        <div className="artwork">
          <img src={playingSong.info.artwork} alt="artwork" ></img>
        </div>
        <div className="song-details">
          <h1>{playingSong.info.song_title}</h1>
          <h4>{playingSong.info.artists}</h4>
        </div>
      </div>
    </div>
  );
};

export default SongProfile;
