import {createContext, useState} from 'react';

export const PlayerSettingsContext = createContext();

export function PlayerSettingsProvider(props){

    const [playerSettings, setPlayerSettings] = useState({
        shuffleIsOn: false,
        repeatIsOn: false
    });

    const toggleSongShuffle = () => {
        setPlayerSettings({...playerSettings, shuffleIsOn: !playerSettings.shuffleIsOn});
    }

    const toggleSongRepeat = () => {
        setPlayerSettings({...playerSettings, repeatIsOn: !playerSettings.repeatIsOn});
    }

    return(
        <PlayerSettingsContext.Provider value={{playerSettings ,toggleSongRepeat, toggleSongShuffle}} >
            {props.children}
        </PlayerSettingsContext.Provider>
    );
}