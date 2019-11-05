import React, { Component } from "react";
import "./modal.css";
import { Link } from "react-router-dom";
import Champions from "../Design/Sounds/homer-champions.mp3"

class ModalWin extends Component {
  render() {
    return (
      <div className="container">
        <div id="ModalWin">
          <p>YOU WIN !!</p>
          <img
            src="http://giphygifs.s3.amazonaws.com/media/A6aHBCFqlE0Rq/giphy.gif"
            alt="winner"
          />
          <p onClick={this.props.initializeGame}>Continue</p>
          <p>
            <Link to="/">Back to title</Link>
          </p>
        </div>
        <iframe
        title="son-champions"
        src={Champions}
        allow="autoplay"
        id="audio"
        style={{ visibility: "hidden" }}
      ></iframe>
      </div>
    );
  }
}

export default ModalWin;