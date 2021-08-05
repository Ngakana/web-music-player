import {createContext, useState } from "react";

import MusicStore from "../data";

export const SongContext = createContext();

export function SongProvider(props) {

    const [songs, setSongs] = useState(MusicStore());
    const [playingSong, setPlayingSong] = useState({
        info: songs[0],
        length: 0,
        playedLength: 0,
        playedLengthPercentage: 0
    });
    const [songIsPlaying, setSongPlayStatus] = useState(false);


    return(
        <SongContext.Provider value={{songs, setSongs, playingSong, setPlayingSong, songIsPlaying, setSongPlayStatus}} >
            {props.children}
        </SongContext.Provider>
    );
}