import React, { createContext, Component } from "react";

export const GameContext = createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: parseInt(localStorage.getItem("level")) || 1,
      nextLevel: this.nextLevel,
      resetLevel: this.resetLevel,
      nbProjectiles: 5
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.level !== prevState.level) {
  //     this.setState({
  //       nbProjectiles: 5 * this.state.level
  //     });
  //   }
  // }

  resetLevel = () => {
    this.setState({ level: 1 });
    localStorage.setItem("level", 1);
    localStorage.setItem("count", 0);
  };

  nextLevel = () => {
    this.setState({
      level: this.state.level + 1,
      nbProjectiles: 5 * (this.state.level + 1)
    });
    localStorage.setItem("level", this.state.level + 1);
  };

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameProvider;
