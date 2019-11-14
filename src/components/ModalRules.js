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
          <h2 className="rules-title">
            <Translate id="modal.start" />
          </h2>
          <div>
            <div className="img-section">
              <img src={doughnut} style={{ width: "15vw" }} alt=""></img>
              <img src={homerRules} style={{ width: "50vw" }} alt=""></img>
              <img src={duff} style={{ width: "12vw" }} alt=""></img>
            </div>
            <p>
              <Translate id="modal.swiperules" />
            </p>
          </div>
          <div className="espace"></div>
          <div>
            <div className="img-section">
              <img src={tapRule} style={{ width: "60vw" }} alt=""></img>
            </div>
            <p>
              <Translate id="modal.taprules" />
            </p>
          </div>
          <div className="button-section">
            <button className="buttonsPauseMenu">
              <Link to="/">
                <i class="fas fa-home"></i>
              </Link>
            </button>
            <button
              className="buttonsPauseMenu"
              onClick={
                !this.props.gameRuleDisplay && this.props.ruleModalDisplay
              }
            >
              <i class="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalStartRules;
