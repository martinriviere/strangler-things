import React, { Component } from "react";
import "../App.css";
import HomerLife from "./HomerLife.js";
import Projectiles from "./Projectiles";
import SwipeDetection from "./SwipeDetection";
import Characters from "./Characters";
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
      items: [
        { name: "doughnut", image: Doughnut },
        { name: "brocoli", image: Brocoli },
        { name: "duff", image: Duff },
        { name: "flanders", image: Flanders }
      ],
      swipeZone: [],
      projectiles: [],
      index: 0,
      pause: false,
      resume: false
    };
  }

  componentDidMount() {
    this.launchGame();
  }

  launchGame = () => {
    this.interval = setInterval(() => {
      const { projectiles, index } = this.state;
      this.setState({
        projectiles: [
          ...projectiles,
          { id: index, type: this.state.items[randomOf(4)] }
        ],
        index: index + 1
      });
    }, 1200);
  };

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

  addProjectileToSwipeZone = projectile => {
    this.setState({ swipeZone: [...this.state.swipeZone, projectile] });
  };

  removeProjectileFromSwipeZone = projectileId => {
    const projectiles = this.state.swipeZone.filter(
      projectileInSwipeZone => projectileInSwipeZone.id !== projectileId
    );
    this.setState({ swipeZone: projectiles });
  };

  pauseGame = () => {
    window.clearInterval(this.interval);
    this.setState({ pause: true });
  };

  resumeGame = () => {
    this.launchGame();
    this.setState({ pause: false, resume: true });
  };

  componentDidUpdate() {
    if (this.state.resume) this.setState({ resume: false });
  }

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
          pause={this.state.pause}
          resume={this.state.resume}
        />
        <SwipeDetection handleSwipe={this.handleSwipe} />
        <button
          style={{
            position: "absolute",
            top: "50px",
            left: "5Opx",
            zIndex: 1022
          }}
          onClick={!this.state.pause ? this.pauseGame : this.resumeGame}
        >
          {!this.state.pause ? "Pause" : "Resume"}
        </button>
      </div>
    );
  }
}

export default Game;
