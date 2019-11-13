import React, { createContext, Component } from "react";
import globalTranslations from "../translations/global.json";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";

export const GameContext = createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: parseInt(localStorage.getItem("level")) || 1,
      nextLevel: this.nextLevel,
      resetLevel: this.resetLevel,
      nbProjectiles: parseInt(localStorage.getItem("level")) * 10 || 10,
      isMusicOn: true,
      isFxOn: true,
      toggleMusic: this.toggleMusic,
      toggleFx: this.toggleFx
    };
    this.baseCount = parseInt(localStorage.getItem("count")) || 0;
    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "French", code: "fr" }
      ],
      translation: globalTranslations,
      options: {
        renderToStaticMarkup,
        defaultLanguage:
          localStorage.getItem("language") || navigator.language.slice(0, 2)
      }
    });
  }

  resetLevel = () => {
    this.setState({ level: 1, nbProjectiles: 10 });
    localStorage.setItem("level", 1);
    localStorage.setItem("count", 0);
  };

  nextLevel = () => {
    this.setState({
      level: this.state.level + 1,
      nbProjectiles: 10 * (this.state.level + 1)
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

export default withLocalize(GameProvider);
