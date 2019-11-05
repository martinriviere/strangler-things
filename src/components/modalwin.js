import React, { Component } from "react";
import "./modal.css";
import { Link } from "react-router-dom";
// import Modal from "react-responsive-modal";

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
      </div>
    );
  }
}

export default ModalWin;