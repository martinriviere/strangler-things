import React, { Component } from "react";
import "./App.css";
import HomerLife from "./components/HomerLife.js";
import Projectiles from "./components/Projectiles";
import SwipeDetection from './components/SwipeDetection';


class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <HomerLife />
        <Projectiles />
        <SwipeDetection />
      </div>
    );
  }
>>>>>>> dev
}

export default App;
