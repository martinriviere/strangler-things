import React from 'react';
import TitleScreen from '../Design/Images/TitleScreenMenu.jpg'
import './Menu.css'

let divStyle = {
    backgroundImage: `url(${TitleScreen})`,
    backgroundSize: 'cover',
    top: 0,
    left: 0,
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
}

function Options () {
    return (
        <h2 style={divStyle}>Options</h2>
    )
}

export default Options