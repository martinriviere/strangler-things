import React, { Component } from "react";
import { Link } from "react-router-dom";
import Haha from "../Design/Sounds/nelson-haha.mp3";
import "../App.css";
import { GameContext } from "../providers/GameProvider";

class ModalLose extends Component {
  static contextType = GameContext;
  render() {
    return (
      <div className="container-modal">
        <div className="ModalLose">
          <h2 className="you-lose">YOU LOSE !!</h2>
          <img
            src="http://giphygifs.s3.amazonaws.com/media/jUwpNzg9IcyrK/giphy.gif"
            alt="winner"
          />
          <p onClick={() => this.props.initializeGame(false)}>Try again</p>
          <p>
            <Link to="/">Back to menu</Link>
          </p>
        </div>
        {this.context.isFxOn && (
          <iframe
            title="son-haha"
            src={Haha}
            allow="autoplay"
            id="audio"
            style={{ visibility: "hidden" }}
          ></iframe>
        )}
      </div>
    );
  }
}

export default ModalLose;
