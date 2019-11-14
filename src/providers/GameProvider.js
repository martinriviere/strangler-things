import React, { createContext, Component } from "react";

export const GameContext = createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: parseInt(localStorage.getItem("level")) || 1,
      nextLevel: this.nextLevel,
      resetLevel: this.resetLevel,
      nbProjectiles: parseInt(localStorage.getItem("level")) * 5 || 5,
      isMusicOn: true,
      isFxOn: true,
      toggleMusic: this.toggleMusic,
      toggleFx: this.toggleFx
    };
    this.baseCount = parseInt(localStorage.getItem("count")) || 0;
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.level !== prevState.level) {
  //     this.setState({
  //       nbProjectiles: 5 * this.state.level
  //     });
  //   }
  // }

  resetLevel = () => {
    this.setState({ level: 1, nbProjectiles: 5 });
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

  toggleFx = () => this.setState({ isFxOn: !this.state.isFxOn });

  toggleMusic = () => this.setState({ isMusicOn: !this.state.isMusicOn });

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameProvider;
