import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {SongProvider} from "./hooks/SongsContext";
import {PlayerSettingsProvider} from "./hooks/PlayerSettingsContext";
import {PlayerControlsProvider} from "./hooks/PlayerControlsContext";
import {AudioProvider} from "./hooks/AudioContext";
import {SongLibraryProvider} from "./hooks/SongLibraryContext";
import {ThemeProvider} from "./hooks/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
      <AudioProvider>
        <PlayerSettingsProvider>
          <SongProvider>
            <SongLibraryProvider>
              <PlayerControlsProvider>
                <ThemeProvider>
                  <App />
                </ThemeProvider>
              </PlayerControlsProvider>
            </SongLibraryProvider>
          </SongProvider>
        </PlayerSettingsProvider>
      </AudioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
