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
          <img
            src="http://giphygifs.s3.amazonaws.com/media/jUwpNzg9IcyrK/giphy.gif"
            alt="winner"
          />
          <div className="button-section">
            <button>
              <Link to="/">
                <i class="fas fa-home"></i>
              </Link>
            </button>
            <button onClick={() => this.props.initializeGame(false)}>
              <i class="fas fa-play"></i>
            </button>
          </div>
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
