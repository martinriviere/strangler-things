import React from 'react';
import TitleScreen from "../Design/Images/TitleScreenMenu.jpg"
import './Menu.css';
import { Link } from "react-router-dom";

let divStyle = {
    backgroundImage: `url(${TitleScreen})`,
    backgroundSize: 'cover',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 2,
}

function Menu() {

    return (
        <div className="Menu" style={divStyle}>
            <nav>
                <ul>
                    <li><Link to="/game">NEW GAME</Link></li>
                    <li>RESUME GAME</li>
                    <li><Link to="/options">OPTIONS</Link></li>
                    <li>CREDITS</li>
                </ul>
            </nav>
        </div>
        )
}

export default Menu;