import {useContext} from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward, faStepForward, faPlay, faPause, faSyncAlt, faRandom } from "@fortawesome/free-solid-svg-icons";


import {AudioContext} from "../hooks/AudioContext";
import {SongContext} from "../hooks/SongsContext";
import {PlayerSettingsContext} from "../hooks/PlayerSettingsContext";
import {PlayerControlsContext} from "../hooks/PlayerControlsContext";
import {ThemeContext} from "../hooks/ThemeContext";

// import audio from "../store/Ulazi feat Zuma Mpura.mp3";

const PlayerControls = () => {

  const audioRef = useContext(AudioContext);
  const {playerSettings ,toggleSongRepeat, toggleSongShuffle} = useContext(PlayerSettingsContext);
  const {playButtonHandler, skipButtonsHandler, dragHandler, songTimeUpdatehandler, songEndHandler} = useContext(PlayerControlsContext);
  const { playingSong, songIsPlaying} = useContext(SongContext);
  const {isThemeLight} = useContext(ThemeContext);

  const formatTimeInfo = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  const trackAnim = {
    transform: `translateX(${playingSong.playedLengthPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTimeInfo(playingSong.playedLength)}</p>

        <div className="track"  >
          <input
            min={0}
            max={playingSong.length || 0}
            value={playingSong.playedLength}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className={ isThemeLight ? "animate-track dark" : "animate-track light"}></div>
        </div>

        <p>
          {
            playingSong.length ? formatTimeInfo(playingSong.length)
            : ""
          }
        </p>
      </div>
      <div className="play-controls">
          <FontAwesomeIcon
            onClick={toggleSongShuffle}
            className="repeat"
            size="1x"
            icon={faRandom}
            color={playerSettings.shuffleIsOn ? "#5d4c80" : "#aaa"}
          />
          <FontAwesomeIcon
            onClick={() => skipButtonsHandler("back")}
            className="prev"
            size="2x"
            icon={faStepBackward}
            color="#5d4c80"
          />
          <FontAwesomeIcon
            onClick={playButtonHandler}
            className="play"
            size="4x"
            icon={
              songIsPlaying 
                ? faPause
                : faPlay
            }
            color="#5d4c80"
          />
          <FontAwesomeIcon
            onClick={() => skipButtonsHandler("next")}
            className="next"
            size="2x"
            icon={faStepForward}
            color="#5d4c80"
          />
            <FontAwesomeIcon
              onClick={toggleSongRepeat}
              className="repeat"
              size="1x"
              icon={faSyncAlt}
              color={playerSettings.repeatIsOn ? "#5d4c80" : "#aaa"}
            />
      </div>
      
      <audio
        onTimeUpdate={songTimeUpdatehandler}
        onLoadedMetadata={songTimeUpdatehandler}
        ref={audioRef}
        src={playingSong.info.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  )
};

// export component
export default PlayerControls;
