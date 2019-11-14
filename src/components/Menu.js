import React, { useContext } from "react";
import TitleScreen from "../Design/Images/TitleScreenMenu.jpg";
import { Link } from "react-router-dom";
import { GameContext } from "../providers/GameProvider";
import Accueil from "../Design/Sounds/accueil.mp3";
import "./Menu.css";
import { withLocalize, Translate } from "react-localize-redux";

let divStyle = {
  backgroundImage: `url(${TitleScreen})`,
  backgroundSize: "cover",
  textAlign: "center",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 2
};

function Menu() {
  const { level, resetLevel, isMusicOn } = useContext(GameContext);
  return (
    <div className="Menu" style={divStyle}>
      <nav>
        <ul>
          {level > 1 && (
            <li>
              <Link to="/game">
                <Translate id="menu.continue" />
              </Link>
            </li>
          )}
          <li onClick={() => resetLevel()}>
            <Link to="/game">
              <Translate id="menu.newGame" />
            </Link>
          </li>
          <li>
            <Link to="/MenuOptions">
              <Translate id="menu.options" />
            </Link>
          </li>
          <li style={{ color: "#bbb" }}>
            <Translate id="menu.credits" />
          </li>
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

export default withLocalize(Menu);
