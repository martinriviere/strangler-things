import React, { Component } from "react";
import TitleScreen from "../Design/Images/TitleScreenMenu.jpg";
import { Link } from "react-router-dom";
import { GameContext } from "../providers/GameProvider";
import Accueil from "../Design/Sounds/accueil.mp3";
import "./Menu.css";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/global.json";

let divStyle = {
  backgroundImage: `url(${TitleScreen})`,
  backgroundSize: "cover",
  textAlign: "center",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 2
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "French", code: "fr" }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  }

  static contextType = GameContext;

  render() {
    const { level, resetLevel, isMusicOn } = this.context;
    return (
      <div className="Menu" style={divStyle}>
        <nav>
          <ul>
            <li onClick={() => resetLevel()}>
              <Link to="/game">NEW GAME</Link>
            </li>
            {level > 1 && (
              <li>
                <Link to="/game">RESUME GAME</Link>
              </li>
            )}
            <li>
              <Link to="/MenuOptions">OPTIONS</Link>
            </li>
            <li style={{ color: "#bbb" }}>CREDITS</li>
          </ul>
        </nav>
        {isMusicOn && (
          <iframe
            title="son-accueil"
            src={Accueil}
            allow="autoplay"
            id="audio"
            style={{ visibility: "hidden" }}
          ></iframe>
        )}
      </div>
    );
  }
}

export default withLocalize(Menu);
