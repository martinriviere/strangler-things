import React, { Component } from "react";
import { Link } from "react-router-dom";
import Haha from "../Design/Sounds/nelson-haha.mp3";
import "../App.css";
import { GameContext } from "../providers/GameProvider";
import { Translate } from "react-localize-redux";

class ModalLose extends Component {
  static contextType = GameContext;
  render() {
    return (
      <div className="container-modal">
        <div className="ModalLose">
          <h2 className="you-lose">
            <Translate id="modal.lose" />
          </h2>
          <div className="counter-container"></div>
          <img
            src="http://giphygifs.s3.amazonaws.com/media/jUwpNzg9IcyrK/giphy.gif"
            alt="winner"
          />
          <p onClick={() => this.props.initializeGame(false)}>
            <Translate id="modal.tryAgain" />
          </p>
          <p>
            <Link to="/">
              <Translate id="modal.backToMenu" />
            </Link>
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
