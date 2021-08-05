import {createContext, useState} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props){

    const [isThemeLight, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!isThemeLight);
    }

    return(
        <ThemeContext.Provider value={{isThemeLight, toggleTheme}} >
            {props.children}
        </ThemeContext.Provider>
    );
}