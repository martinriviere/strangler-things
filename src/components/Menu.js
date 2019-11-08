import React, { useContext } from "react";
import TitleScreen from "../Design/Images/TitleScreenMenu.jpg";
import { Link } from "react-router-dom";
import { GameContext } from "../providers/GameProvider";
import Accueil from "../Design/Sounds/accueil.mp3";
import "./Menu.css";

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
  const { level, resetLevel } = useContext(GameContext);

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
          <li>CREDITS</li>
        </ul>
      </nav>
      <iframe
        title="son-accueil"
        src={Accueil}
        allow="autoplay"
        id="audio"
        style={{ visibility: "hidden" }}
      ></iframe>
    </div>
  );
}

export default Menu;
