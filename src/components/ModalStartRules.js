import React, { Component } from "react";
import doughnut from "../Design/Projectiles/doughnut.png";
import duff from "../Design/Projectiles/duff.png";
import homerRules from "../Design/GameRules/homerRule.gif";
import tapRule from "../Design/GameRules/tapRule.png";
import "../App.css";
import { Link } from "react-router-dom";
import { Translate } from "react-localize-redux";

class ModalStartRules extends Component {
  render() {
    return (
      <div className="container-modal">
        <div className="ModalStartRules">
          <h2 classname="rules-title">
            <Translate id="modal.start" />
          </h2>
          <div>
            <img src={doughnut} style={{ width: "10vw" }} alt=""></img>
            <img src={homerRules} style={{ width: "50vw" }} alt=""></img>
            <img src={duff} style={{ width: "10vw" }} alt=""></img>
            <p>Swipe right for beers <br/>and left for doughnuts</p>
          </div>
          <div className="espace"></div>
          <div>
            <img src={tapRule} style={{ width: "60vw" }} alt=""></img>
            <p>Tap to avoid Flanders<br/> and Broccolis !</p>
          </div>
          <button
            className="buttonsPauseMenu"
            onClick={!this.props.gameRuleDisplay && this.props.ruleModalDisplay}
          >
            <Translate id="modal.continue" />
          </button>
          <button className="buttonsPauseMenu">
            <Link to="/">
              <Translate id="modal.backToMenu" />
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default ModalStartRules;
