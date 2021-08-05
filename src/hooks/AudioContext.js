import {createContext, useRef} from "react";

export const AudioContext = createContext();

export function AudioProvider(props) {

    const audioRef = useRef(null);

    return(
        <AudioContext.Provider value={audioRef} >
            {props.children}
        </AudioContext.Provider>
    );
}