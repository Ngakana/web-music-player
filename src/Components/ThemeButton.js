import {useContext} from "react";

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
                </button> 
            }
            {/* <h4 onClick={toggleTheme} >{isThemeLight ? "Go dark" : "Go light"}</h4> */}
            <h4 onClick={toggleTheme} >themify</h4>
            { isThemeLight ? <button 
                onClick={toggleTheme}
                style={{ backgroundColor:"#232533" }}
            >
            </button> : null }
        </div>
    );
}

export default ThemeButton;