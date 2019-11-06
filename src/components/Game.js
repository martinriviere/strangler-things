import React, { Component } from "react";
import "../App.css";
import HomerLife from "./HomerLife.js";
import Counter from "./Counter.js";
import Projectiles from "./Projectiles";
import SwipeDetection from "./SwipeDetection";
import Characters from "./Characters";
import ModalWin from "./modalwin";
import ModalLose from "./modallose";
import ModalStreak from "./ModalStreak";
import { randomOf } from "./helpers";
import Doughnut from "../Design/Projectiles/doughnut.png";
import Duff from "../Design/Projectiles/duff.png";
import Brocoli from "../Design/Projectiles/brocoli.png";
import Flanders from "../Design/Projectiles/flanders.png";
import GameRules from "./GameRules.js";
import { Button } from "reactstrap";
import { GameContext } from "../providers/GameProvider";
import Doh from "../Design/Sounds/homer-doh.mp3";
import Bgsound from "../Design/Sounds/game-generique.mp3";
import Barriere from "./Barriere";
import Level from "./Level";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      move: null,
      lifeNumber: 5,
      lifeMax: 5,
      gameRuleDisplay: false,
      items: [
        { name: "doughnut", image: Doughnut },
        { name: "brocoli", image: Brocoli },
        { name: "duff", image: Duff },
        { name: "flanders", image: Flanders }
      ],
      swipeZone: [],
      projectiles: [],
      index: 0,
      win: false,
      lose: false,
      pause: false,
      resume: false,
      streak: [],
      count: 0
    };
    this.baseState = this.state;
    this.doh = new Audio(Doh);
    this.bgsound = new Audio(Bgsound);
  }

  static contextType = GameContext;

  componentDidMount() {
    this.launchGame();
  }

  initializeGame = () => {
    this.setState({ ...this.baseState, count: this.state.count });
    this.launchGame();
  };

  ruleModalDisplay = () => {
    this.setState({ gameRuleDisplay: !this.state.gameRuleDisplay });
    this.state.gameRuleDisplay ? this.resumeGame() : this.pauseGame();
  };

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
    this.bgsound.play();
  };

  componentWillUnmount() {
    window.clearInterval(this.interval);
    this.bgsound.pause();
  }

  deleteProjectile = projectileId => {
    const projectiles = this.state.projectiles.filter(
      projectile => projectile.id !== projectileId
    );
    this.setState({ projectiles: projectiles });
  };

  checkWin = () => {
    const { level } = this.context;
    if (this.state.index >= level * 5) {
      this.pauseGame();
      setTimeout(() => this.setState({ win: true }), 10);
    }
  };

  checkLose = () => {
    if (this.state.lifeNumber < 1) {
      this.pauseGame();
      setTimeout(() => this.setState({ lose: true }), 10);
    }
  };

  handleSwipe = event => {
    if (event === "right") {
      this.state.swipeZone.forEach(projectile => {
        if (projectile.type.name === "duff") {
          this.checkWin();
          this.deleteProjectile(projectile.id);
          this.setState({ streak: [...this.state.streak, projectile] });
          this.removeProjectileFromSwipeZone(projectile.id);
          this.addPoints();
        }
      });
    }
    if (event === "left") {
      this.state.swipeZone.forEach(projectile => {
        if (projectile.type.name === "doughnut") {
          this.checkWin();
          this.deleteProjectile(projectile.id);
          this.setState({ streak: [...this.state.streak, projectile] });
          this.removeProjectileFromSwipeZone(projectile.id);
          this.addPoints();
        }
      });
    }
    if (event === "touch") {
      this.state.swipeZone.forEach(projectile => {
        if (
          projectile.type.name === "brocoli" ||
          projectile.type.name === "flanders"
        ) {
          this.checkWin();
          this.deleteProjectile(projectile.id);
          this.setState({ streak: [...this.state.streak, projectile] });
          this.removeProjectileFromSwipeZone(projectile.id);
          this.addPoints();
        }
      });
    }
  };

  addPoints = () => {
    if (this.state.streak.length < 5) {
      this.setState({ count: this.state.count + 50 });
    } else if (this.state.streak.length < 10) {
      this.setState({ count: this.state.count + 75 });
    } else if (this.state.streak.length < 15) {
      this.setState({ count: this.state.count + 100 });
    } else if (this.state.streak.length < 20) {
      this.setState({ count: this.state.count + 150 });
    } else {
      this.setState({ count: this.state.count + 200 });
    }
  };

  reduceLife = () => {
    // { e => this.reduceLife()} pour l'utiliser
    if (this.state.lifeNumber > 1) {
      this.setState(state => {
        this.doh.play();
        return { lifeNumber: state.lifeNumber - 1, streak: [] };
      });
    } else {
      this.doh.play();
      this.setState({ lose: true });
      this.pauseGame();
    }
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
    this.bgsound.pause();
  };

  resumeGame = () => {
    this.launchGame();
    this.setState({ pause: false, resume: true });
    this.bgsound.play();
  };

  componentDidUpdate() {
    if (this.state.resume) this.setState({ resume: false });
  }

  render() {
    return (
      <div className="App">
        <Level />
        <Barriere />
        <Barriere right />
        <HomerLife
          lifeNumber={this.state.lifeNumber}
          lifeMax={this.state.lifeMax}
        />
        <Counter count={this.state.count} />
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
        {!this.state.win && !this.state.lose && (
          <Button
            outline
            color="warning"
            onClick={e => this.ruleModalDisplay()}
            style={{
              position: "fixed",
              left: "72vw",
              top: "2vh",
              zIndex: 1500
            }}
          >
            {this.state.gameRuleDisplay ? "Resume" : "Pause"}
          </Button>
        )}
        {this.state.streak.length > 0 && this.state.streak.length % 5 === 0 && (
          <ModalStreak streak={this.state.streak.length} />
        )}

        {this.state.gameRuleDisplay && (
          <GameRules ruleModalDisplay={this.ruleModalDisplay} />
        )}
        {this.state.win && <ModalWin initializeGame={this.initializeGame} />}
        {this.state.lose && <ModalLose initializeGame={this.initializeGame} />}
      </div>
    );
  }
}

export default Game;
