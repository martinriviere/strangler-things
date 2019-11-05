import React, { useContext } from "react";
import TitleScreen from "../Design/Images/TitleScreenMenu.jpg";
import "./Menu.css";
import { Link } from "react-router-dom";
import { GameContext } from "../providers/GameProvider";

let divStyle = {
    backgroundImage: `url(${TitleScreen})`,
    backgroundSize: 'cover',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 2,
}

function Menu() {
  const { level, setLevel } = useContext(GameContext);

  return (
    <div className="Menu" style={divStyle}>
      <nav>
        <ul>
          <li onClick={() => setLevel(1)}>
            <Link to="/game">NEW GAME</Link>
          </li>
          {level > 1 && (
            <li>
              <Link to="/game">RESUME GAME</Link>
            </li>
          )}
          <li>
            <Link to="/options">OPTIONS</Link>
          </li>
          <li>CREDITS</li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
