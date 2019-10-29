import React, { Component } from "react";
import "./Game.css";
import HomerLife from "./HomerLife"
import Projectiles from "./Projectiles"

class Game extends Component {

  render() {
    return (
      <div className="Game">
          <HomerLife />
          <Projectiles />
      </div>
    );
  }
}

export default Game;