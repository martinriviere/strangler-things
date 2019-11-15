import React, { Component } from "react";
import { Translate } from "react-localize-redux";
import "./modal.css";

class ModalDrunk extends Component {
  render() {
    return (
      <div className="containerDrunk">
        <div className="ModalDrunk">
          <h2 className="homerDrunk"><Translate id="modal.drunk-title" /></h2>
          <p><Translate id="modal.drunk-text" /></p>
        </div>
      </div>
    );
  }
}

export default ModalDrunk;