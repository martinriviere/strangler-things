import React, { Component } from "react";
import "./App.css";
import HomerLife from "./components/HomerLife.js";
import Projectiles from "./components/Projectiles";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <HomerLife />
        <Projectiles />
      </div>
    );
  }
}

export default App;
