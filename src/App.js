import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import ConfettiWin from "./components/confetti"
import ModalWin from "./components/modalwin";
// import ModalLose from "./components/modallose";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <ModalWin />
        {/* <ModalLose /> */}
        <ConfettiWin />
      </div>
    );
  }
}

export default App;
