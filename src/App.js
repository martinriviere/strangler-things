import React, { Component } from "react";
import "./App.css";
import HomerLife from "./components/HomerLife.js";
import Projectiles from "./components/Projectiles";
import SwipeDetection from "./components/SwipeDetection";
import Characters from "./components/Characters";
import GameRules from "./components/GameRules";

class App extends Component {
  constructor() {
    super();
    this.state = {
      move: null,
      lifeNumber: 5,
      lifeMax: 5
    };
  }

  handleSwipe = event => {
    this.setState({ move: event });
    console.log(this.state.move);
  };
  reduceLife = () => {
    // { e => this.reduceLife()} pour l'utiliser
    this.state.lifeNumber > 1
      ? this.setState(state => {
          return { lifeNumber: state.lifeNumber - 1 };
        })
      : alert("You're a loser GAMEOVER"); // Component gameOver?
  };
  addLife = () => {
    this.state.lifeNumber < this.state.lifeMax &&
      this.setState(state => {
        return { lifeNumber: state.lifeNumber + 1 };
      });
  };
  render() {
    return (
      <div className="App">
        <HomerLife
          lifeNumber={this.state.lifeNumber}
          lifeMax={this.state.lifeMax}
        />
        <Characters />
        <GameRules />
        <Projectiles />
        <SwipeDetection handleSwipe={this.handleSwipe} />
      </div>
    );
  }
}

export default App;
