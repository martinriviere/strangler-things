import React, { useContext } from "react";
import { Translate } from "react-localize-redux";
import Drunk from "../Design/Sounds/homer-drunk.mp3";
import DrunkImg from "../Design/Images/homer-drunk.gif";
import { GameContext } from "../providers/GameProvider";
import "../App.css";

function ModalDrunk(props) {
  const { isFxOn } = useContext(GameContext);
  return (
    <div>
      <div className="ModalDrunk">
        <img
          src={DrunkImg}
          alt="winner"
        />
        <h2 className="homerDrunk">
          <Translate id="modal.drunk-title" />
        </h2>

        <p>
          <Translate id="modal.drunk-text" />
        </p>
      </div>
      {isFxOn && (
        <iframe
          title="son-drunk"
          src={Drunk}
          allow="autoplay"
          id="audio"
          style={{ visibility: "hidden" }}
        ></iframe>
      )}
    </div>
  );
}

export default ModalDrunk;
