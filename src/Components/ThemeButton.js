import {useContext} from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import {ThemeContext} from "../hooks/ThemeContext";

function ThemeButton(){

    const {isThemeLight, toggleTheme} = useContext(ThemeContext);

    return(
        <div className="theme-buttons" >
            { isThemeLight ? null : 
                <button 
                    onClick={toggleTheme} 
                    style={{ backgroundColor:"antiquewhite" }}
                >
                    {/* <FontAwesomeIcon icon={  faSun } size="1x" color="#5d4c80" /> */}
                </button> }
            <h4 onClick={toggleTheme} >{isThemeLight ? "Go dark" : "Go light"}</h4>
            { isThemeLight ? <button 
                onClick={toggleTheme}
                style={{ backgroundColor:"#232533" }}
            >
                {/* <FontAwesomeIcon icon={  faMoon } size="1x" color="#5d4c80" /> */}
            </button> : null }
        </div>
    );
}

export default ThemeButton;