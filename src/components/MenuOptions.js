import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TitleScreen from "../Design/Images/TitleScreenMenu.jpg";
import "./MenuOptions.css";
import { GameContext } from "../providers/GameProvider";
import { withLocalize, Translate } from "react-localize-redux";
import LanguageFlag from "./LanguageFlag";

let divStyle = {
  backgroundImage: `url(${TitleScreen})`,
  backgroundSize: "cover",
  textAlign: "left",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 2
};

function MenuOptions({ languages }) {
  const { isMusicOn, isFxOn, toggleMusic, toggleFx } = useContext(GameContext);
  return (
    <div className="Menu" id="MenuOptions" style={divStyle}>
      <nav>
        <ul>
          <li>
            <Translate id="options.language" />
            <br />
            {languages.map((language, index) => (
              <LanguageFlag language={language.code} key={index} />
            ))}
          </li>
          <li>
            <Translate id="options.music" />
            <label className="switch">
              <input
                type="checkbox"
                checked={isMusicOn ? true : false}
                onChange={toggleMusic}
              />
              <span className="slider round"></span>
            </label>{" "}
          </li>
          <li>
            <Translate id="options.fx" />
            <label className="switch">
              <input
                type="checkbox"
                checked={isFxOn ? true : false}
                onChange={toggleFx}
              />
              <span className="slider round"></span>
            </label>{" "}
          </li>
          <li id="backtomenu">
            <Link to="/">
              ← <Translate id="options.back" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default withLocalize(MenuOptions);
