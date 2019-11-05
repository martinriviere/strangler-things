import React, { Component } from "react";
import "./modal.css";
import { Link } from "react-router-dom";

class ModalLose extends Component {
  render() {
    return (
      <div className="container">
        <div id="ModalLose">
          <p>YOU LOSE !!</p>
          <img
            src="http://giphygifs.s3.amazonaws.com/media/jUwpNzg9IcyrK/giphy.gif"
            alt="winner"
          />
          <p onClick={this.props.initializeGame}>Continue</p>
          <p>
            <Link to="/">Back to menu</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ModalLose;