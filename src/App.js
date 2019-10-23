import React, { Component } from "react";
import "./App.css";
import HomerLife from "./components/HomerLife.js";
import Projectiles from "./components/Projectiles";
import SwipeDetection from './components/SwipeDetection';


class App extends Component {
  constructor() {
    super();
    this.state={
      move: null
  } 
  }

  handleSwipe = event => {
    this.setState({ move: event });
    console.log(this.state.move)
  }

  render() {
    return (
      <div className="App">
        <HomerLife />
        <Projectiles />
        <SwipeDetection handleSwipe={this.handleSwipe}/>
      </div>
    );
  }
}

export default App;
