/*
*********************************************************************
REACT HOOKS
*********************************************************************
*/
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeContext} from "./hooks/ThemeContext";

/*
*********************************************************************
LOCAL MODULES
*********************************************************************
*/
import "./Styles/app.scss";

import {SongLibraryContext} from "./hooks/SongLibraryContext";

import SongProfile from "./Components/SongUI";
import PlayerControls from "./Components/PlayerControls";
import LibrarySongList from "./Components/SongsLibrary";
import Nav from "./Components/Nav";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  
  const { libraryIsVisible } = useContext(SongLibraryContext);
  const { isThemeLight } = useContext(ThemeContext);

  return (
    <div className={`App ${libraryIsVisible ? "library-active" : "" } ${ isThemeLight ? "light" : "dark" }`}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Nav />
            <LibrarySongList />
            <SongProfile />
            <PlayerControls />
          </Route>
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
