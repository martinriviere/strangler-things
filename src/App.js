import React, { Component } from "react";
import "./App.css";
import HomerLife from "./components/HomerLife.js";
import Projectiles from "./components/Projectiles";
import SwipeDetection from "./components/SwipeDetection";
import Characters from "./components/Characters";
import { randomOf } from "./components/helpers";
import Doughnut from "./Design/Projectiles/doughnut.png";
import Duff from "./Design/Projectiles/duff.png";
import Brocoli from "./Design/Projectiles/brocoli.png";
import Flanders from "./Design/Projectiles/flanders.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      move: null,
      lifeNumber: 5,
      lifeMax: 5,
      swipeZone: [],
      projectiles: [],
      index: 0
    };
  }

  componentDidMount() {
    const items = [
      { name: "doughnut", image: Doughnut },
      { name: "brocoli", image: Brocoli },
      { name: "duff", image: Duff },
      { name: "flanders", image: Flanders }
    ]
    setInterval(() => {
      const { projectiles, index } = this.state;
      this.setState({
        projectiles: [
          ...projectiles,
          { id: index, type: items[randomOf(4)] }
        ],
        index: index + 1
      });
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
        if (projectile.type.name === "duff") this.deleteProjectile(projectile.id)
      });
    }
    if (event === "left") {
      this.state.swipeZone.forEach(projectile => {
        if (projectile.type.name === "doughnut") this.deleteProjectile(projectile.id)
      });
    }
    if (event === "touch") {
      this.state.swipeZone.forEach(projectile => {
        if (projectile.type.name === "brocoli" || projectile.type.name === "flanders") this.deleteProjectile(projectile.id)
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

  addProjectileToSwipeZone = (projectile) => {
    this.setState({swipeZone:[...this.state.swipeZone, projectile] })
  }

  removeProjectileFromSwipeZone = (projectileId) => {
    const projectiles = this.state.swipeZone.filter(
      projectileInSwipeZone => projectileInSwipeZone.id !== projectileId
    );
    this.setState({ swipeZone: projectiles });
  }

  render() {
    return (
      <div className="App">
        <HomerLife
          lifeNumber={this.state.lifeNumber}
          lifeMax={this.state.lifeMax}
        />
        <Characters />
        <Projectiles projectiles={this.state.projectiles} deleteProjectile={this.deleteProjectile} addProjectileToSwipeZone={this.addProjectileToSwipeZone} removeProjectileFromSwipeZone={this.removeProjectileFromSwipeZone} />
        <SwipeDetection handleSwipe={this.handleSwipe} />
      </div>
    );
  }
}

export default App;
