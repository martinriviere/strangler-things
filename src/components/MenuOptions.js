import React from 'react';
import { Link } from "react-router-dom";
import TitleScreen from '../Design/Images/TitleScreenMenu.jpg'
import './MenuOptions.css'

let divStyle = {
    backgroundImage: `url(${TitleScreen})`,
    backgroundSize: "cover",
    textAlign: "left",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: 2
  };

function MenuOptions () {
    return (
        <div className="Menu" style={divStyle}>
            <nav>
                <ul>
                    <li>Language</li>
                    <li>Music</li>
                    <li>FX</li>
                    <li id="backtomenu">
                    <Link to="/">← Back to menu</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuOptions;