import {createContext, useContext} from "react";

import {SongContext} from "./SongsContext";
import {SongLibraryContext} from "./SongLibraryContext";
import {AudioContext} from "./AudioContext";
import {PlayerSettingsContext} from "../hooks/PlayerSettingsContext";

export const PlayerControlsContext = createContext();

export function PlayerControlsProvider(props){

    
    const { songs, playingSong, setPlayingSong, songIsPlaying, setSongPlayStatus } = useContext(SongContext);
    const { activeSongUpdate } = useContext(SongLibraryContext);
    const audioRef = useContext(AudioContext);
    const { playerSettings } = useContext(PlayerSettingsContext);

    const playButtonHandler = () => {
        if (songIsPlaying) {
            audioRef.current.pause();
        } 
        else {
          audioRef.current.play();
        }
        setSongPlayStatus(!songIsPlaying);
    }

    const skipButtonsHandler = async (skipDir) => {

        let playingSongIndex = songs.findIndex((song) => song.id === playingSong.info.id);

        if (skipDir === "back") {
            if( playerSettings.shuffleIsOn ){
                const getRandomIndex = () => {
                    let randomIndex = Math.ceil(Math.random() * (songs.length - 1));
                    if( randomIndex !== playingSongIndex ){
                        return randomIndex
                    }
                    else{
                        getRandomIndex()
                    }
                }
    
                let randomIndex = getRandomIndex();
    
                await setPlayingSong({
                    info: songs[randomIndex],
                    length: 0,
                    playedLength: 0,
                    playedLengthPercentage: 0
                });
                activeSongUpdate(songs[randomIndex]);
    
                if( songIsPlaying ){
                    audioRef.current.play()
                }
            }
            else if (playingSongIndex === 0) {
                await setPlayingSong({
                    info: songs[songs.length - 1],
                    length: 0,
                    playedLength: 0,
                    playedLengthPercentage: 0
                });
                activeSongUpdate(songs[songs.length - 1]);

                if (songIsPlaying) {
                audioRef.current.play();
                }
            } 
            else {
                await setPlayingSong({
                    info: songs[playingSongIndex - 1],
                    length: 0,
                    playedLength: 0,
                    playedLengthPercentage: 0
                });
                activeSongUpdate(songs[playingSongIndex - 1]);
            }
            if(songIsPlaying){ audioRef.current.play() };
            return;
        } 
        else if (skipDir === "next") {
            if( playerSettings.shuffleIsOn ){
                const getRandomIndex = () => {
                    let randomIndex = Math.ceil(Math.random() * (songs.length - 1));
                    if( randomIndex !== playingSongIndex ){
                        return randomIndex
                    }
                    else{
                        getRandomIndex()
                    }
                }
    
                let randomIndex = getRandomIndex();
    
                await setPlayingSong({
                    info: songs[randomIndex],
                    length: 0,
                    playedLength: 0,
                    playedLengthPercentage: 0
                });
                activeSongUpdate(songs[randomIndex]);
    
                if( songIsPlaying ){
                    audioRef.current.play()
                }
            }
           else if (playingSongIndex === songs.length - 1) {
                await setPlayingSong({
                    info: songs[0],
                    length: 0,
                    playedLength: 0,
                    playedLengthPercentage: 0
                });
                activeSongUpdate(songs[0]);
            } 
            else {
                await setPlayingSong({
                    info: songs[playingSongIndex + 1],
                    length: 0,
                    playedLength: 0,
                    playedLengthPercentage: 0
                });
                activeSongUpdate(songs[playingSongIndex + 1]);
            }
            if(songIsPlaying){audioRef.current.play()};
            console.log(playingSong.info);
            return;
        }
    }

    const dragHandler = (event) => {
        audioRef.current.currentTime = event.target.value;
        setPlayingSong({ ...playingSong, playedLength: event.target.value });
    }

    const songTimeUpdatehandler = (event) => {

        const duration = event.target.duration;
        const currentLength = event.target.currentTime;
        const currentProgress = (Math.round(duration)/Math.round(currentLength))*100;

        setPlayingSong( (playingSong) => ({
            ...playingSong, 
            length: duration,
            playedLength: currentLength,
            playedLengthPercentage: currentProgress
        }))
    }

    const songEndHandler = async () => {
        
        const playingSongIndex = songs.findIndex( song => song.id === playingSong.info.id );

        if( playerSettings.repeatIsOn ) {
            await setPlayingSong({
                info: songs[playingSongIndex],
                length: 0,
                playedLength: 0,
                playedLengthPercentage: 0
            });

            if( songIsPlaying ){
                audioRef.current.play()
            }
        }
        else if( playerSettings.shuffleIsOn ){
            const getRandomIndex = () => {
                let randomIndex = Math.ceil(Math.random() * (songs.length - 1));
                if( randomIndex !== playingSongIndex ){
                    return randomIndex
                }
                else{
                    getRandomIndex()
                }
            }

            let randomIndex = getRandomIndex();

            await setPlayingSong({
                info: songs[randomIndex],
                length: 0,
                playedLength: 0,
                playedLengthPercentage: 0
            });

            if( songIsPlaying ){
                audioRef.current.play()
            }
        }
        else if( !playerSettings.repeatIsOn && !playerSettings.shuffleIsOn && playingSongIndex === (songs.length - 1)  ){
            await setPlayingSong({
                info: songs[0],
                length: 0,
                playedLength: 0,
                playedLengthPercentage: 0
            });

            if( songIsPlaying ){
                audioRef.current.play()
            }
        }

    }

    return(
        <PlayerControlsContext.Provider value={{playButtonHandler, skipButtonsHandler, dragHandler, songTimeUpdatehandler, songEndHandler}} >
            {props.children}
        </PlayerControlsContext.Provider>
    );
}