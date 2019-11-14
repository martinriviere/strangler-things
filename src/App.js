import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import MenuOptions from "./components/MenuOptions.js";
import Game from "./components/Game";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import GameProvider from "./providers/GameProvider";

class App extends Component {
  render() {
    return (
      <LocalizeProvider>
        <GameProvider>
          <Router>
            <>
              <Switch>
                <Route exact path="/" component={Menu} />
                <Route path="/game" component={Game} />
                <Route path="/MenuOptions" component={MenuOptions} />
              </Switch>
            </>
          </Router>
        </GameProvider>
      </LocalizeProvider>
    );
  }
}

export default App;
