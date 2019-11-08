import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TitleScreen from "../Design/Images/TitleScreenMenu.jpg";
import "./MenuOptions.css";
import { GameContext } from "../providers/GameProvider";

let divStyle = {
  backgroundImage: `url(${TitleScreen})`,
  backgroundSize: "cover",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 2
};

function MenuOptions() {
  const { isMusicOn, isFxOn, toggleMusic, toggleFx } = useContext(GameContext);
  return (
    <div className="Menu" style={divStyle}>
      <nav>
        <ul>
          <li style={{ color: "#ddd" }}>LANGUAGE</li>
          <li>
            MUSIC
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
            FX
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
            <Link to="/">← BACK</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuOptions;
