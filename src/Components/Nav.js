import {useContext} from "react";

import {SongLibraryContext} from "../hooks/SongLibraryContext";

import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ThemeButton from "./ThemeButton"

const Nav = () => {

    const { libraryIsVisible, setLibrabryVisisbility } = useContext(SongLibraryContext);

    return(
        <nav>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                <h1>MzansiWaya</h1>
                <ThemeButton />
            </div>
            <button onClick={() => setLibrabryVisisbility(!libraryIsVisible) }>
                <h2>Library</h2>
                <FontAwesomeIcon className="library" size="2x" icon={faMusic}/>
            </button>
        </nav>
    );
}

export default Nav;