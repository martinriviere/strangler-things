import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Options from "./components/Options"
import Game from "./components/Game"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/game" component={Game} />
          <Route path="/options" component={Options} />
        </Switch>
      </>
      </Router>
    );
  }
}

export default App;
