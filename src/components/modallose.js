import React, { Component } from "react";
import { Link } from "react-router-dom";
import Haha from "../Design/Sounds/nelson-haha.mp3";
import "../App.css";

class ModalLose extends Component {
  render() {
    return (
      <div className="container-modal">
        <div className="ModalLose">
          <h2 className="you-lose">YOU LOSE !!</h2>
          <div className="counter-container">
      </div>
          <img
            src="http://giphygifs.s3.amazonaws.com/media/jUwpNzg9IcyrK/giphy.gif"
            alt="winner"
          />
          <p onClick={() => this.props.initializeGame(false)}>Try again</p>
          <p>
            <Link to="/">Back to menu</Link>
          </p>
        </div>
        <iframe
          title="son-haha"
          src={Haha}
          allow="autoplay"
          id="audio"
          style={{ visibility: "hidden" }}
        ></iframe>
      </div>
    );
  }
}

export default ModalLose;
