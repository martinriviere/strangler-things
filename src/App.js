import React, { Component } from "react";
import "./App.css";
import HomerLife from "./components/HomerLife.js";
import Projectiles from "./components/Projectiles";
import SwipeDetection from "./components/SwipeDetection";
import Characters from "./components/Characters";
import GameRules from "./components/GameRules";
import { Button } from 'reactstrap';


class App extends Component {
  constructor() {
    super();
    this.ruleModalDisplay = this.ruleModalDisplay.bind(this)
    this.state = {
      move: null,
      lifeNumber: 5,
      lifeMax: 5,
      gameRuleDisplay: false,
    };
  }
  ruleModalDisplay = () => {
      this.setState(state => {
        return { gameRuleDisplay: !state.gameRuleDisplay};
      });
  };

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
        <Button outline color="warning" 
        onClick = {e => this.ruleModalDisplay()}
        style = {{position: "fixed", left : "72vw", top : "2vh",zIndex : 1000}}>
        {this.state.gameRuleDisplay? "Resume" : "Rules"}</Button>       
        <HomerLife
          lifeNumber={this.state.lifeNumber}
          lifeMax={this.state.lifeMax}
        />
        <Characters />
        {this.state.gameRuleDisplay && <GameRules ruleModalDisplay = {this.ruleModalDisplay}/>}
        <Projectiles />
        <SwipeDetection handleSwipe={this.handleSwipe} />
      </div>
    );
  }
}

export default App;
