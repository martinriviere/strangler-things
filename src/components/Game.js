import React, { Component } from "react";
import "../App.css";
import HomerLife from "./HomerLife.js";
import Projectiles from "./Projectiles";
import SwipeDetection from "./SwipeDetection";
import Characters from "./Characters";
import ModalWin from "./modalwin";
import ModalLose from "./modallose";
import { randomOf } from "./helpers";
import Doughnut from "../Design/Projectiles/doughnut.png";
import Duff from "../Design/Projectiles/duff.png";
import Brocoli from "../Design/Projectiles/brocoli.png";
import Flanders from "../Design/Projectiles/flanders.png";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      move: null,
      lifeNumber: 5,
      lifeMax: 5,
      swipeZone: [],
      projectiles: [],
      index: 0,
      win: false,
      lose: false
    };
  }

  componentDidMount() {
    const items = [
      { name: "doughnut", image: Doughnut },
      { name: "brocoli", image: Brocoli },
      { name: "duff", image: Duff },
      { name: "flanders", image: Flanders }
    ];
    this.interval = setInterval(() => {
      const { projectiles, index } = this.state;
      this.setState({
        projectiles: [...projectiles, { id: index, type: items[randomOf(4)] }],
        index: index + 1
      });
      if (index > 19) {
        this.setState({ win: true });
      }
    }, 1200);
  }

  deleteProjectile = projectileId => {
    const projectiles = this.state.projectiles.filter(
      projectile => projectile.id !== projectileId
    );
    this.setState({ projectiles: projectiles });
  };

  handleSwipe = event => {
    if (event === "right") {
      this.state.swipeZone.forEach(projectile => {
        if (projectile.type.name === "duff")
          this.deleteProjectile(projectile.id);
      });
    }
    if (event === "left") {
      this.state.swipeZone.forEach(projectile => {
        if (projectile.type.name === "doughnut")
          this.deleteProjectile(projectile.id);
      });
    }
    if (event === "touch") {
      this.state.swipeZone.forEach(projectile => {
        if (
          projectile.type.name === "brocoli" ||
          projectile.type.name === "flanders"
        )
          this.deleteProjectile(projectile.id);
      });
    }
  };

  reduceLife = () => {
    // { e => this.reduceLife()} pour l'utiliser
    if (this.state.lifeNumber > 1) {
      this.setState(state => {
        return { lifeNumber: state.lifeNumber - 1 };
      });
    } else this.setState({ lose: true });
    // : alert("You're a loser GAMEOVER");
    // Component gameOver?
  };

  addLife = () => {
    this.state.lifeNumber < this.state.lifeMax &&
      this.setState(state => {
        return { lifeNumber: state.lifeNumber + 1 };
      });
  };

  addProjectileToSwipeZone = projectile => {
    this.setState({ swipeZone: [...this.state.swipeZone, projectile] });
  };

  removeProjectileFromSwipeZone = projectileId => {
    const projectiles = this.state.swipeZone.filter(
      projectileInSwipeZone => projectileInSwipeZone.id !== projectileId
    );
    this.setState({ swipeZone: projectiles });
  };

  render() {
    return (
      <div className="App">
        <HomerLife
          lifeNumber={this.state.lifeNumber}
          lifeMax={this.state.lifeMax}
        />
        <Characters />
        <Projectiles
          projectiles={this.state.projectiles}
          deleteProjectile={this.deleteProjectile}
          addProjectileToSwipeZone={this.addProjectileToSwipeZone}
          removeProjectileFromSwipeZone={this.removeProjectileFromSwipeZone}
          reduceLife={this.reduceLife}
        />
        <SwipeDetection handleSwipe={this.handleSwipe} />
        {this.state.win && <ModalWin />}
        {this.state.lose && <ModalLose />}
      </div>
    );
  }
}

export default Game;
