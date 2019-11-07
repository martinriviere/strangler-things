import React, { Component } from "react";
import "../App.css";

class ModalStreak extends Component {
  render() {
    return (
      <div className="container-streak">
        <div className="ModalStreak">
          <p>COMBO x {this.props.streak}</p>
      </div>
      </div>
    );
  }
}

export default ModalStreak;