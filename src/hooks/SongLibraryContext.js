import {createContext, useContext, useState} from "react";

import {SongContext} from "./SongsContext";

export const SongLibraryContext = createContext();

export function SongLibraryProvider(props){

    const { songs, setSongs } = useContext(SongContext);
    const [libraryIsVisible, setLibrabryVisisbility] = useState(false); 

    const activeSongUpdate = (desiredSong) => {
        const updatedSongsActiveStatus = songs.map( (track) => {
            if (track.id === desiredSong.id) {
                return { ...track, active: true};
            } 
            else {
                return { ...track, active: false};
            }
        });

        setSongs( () => updatedSongsActiveStatus);
    }

    return(
        <SongLibraryContext.Provider value={{activeSongUpdate, libraryIsVisible, setLibrabryVisisbility}} >
            {props.children}
        </SongLibraryContext.Provider>
    );
}