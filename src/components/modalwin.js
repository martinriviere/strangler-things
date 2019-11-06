import React, { useContext } from "react";
import "./modal.css";
import { Link } from "react-router-dom";
import Champions from "../Design/Sounds/homer-champions.mp3";
import { GameContext } from "../providers/GameProvider";

function ModalWin(props) {
  const { nextLevel } = useContext(GameContext);
  return (
    <div className="container">
      <div id="ModalWin">
        <p>YOU WIN !!</p>
        <img
          src="http://giphygifs.s3.amazonaws.com/media/A6aHBCFqlE0Rq/giphy.gif"
          alt="winner"
        />
        <p
          onClick={() => {
            nextLevel();
            props.initializeGame();
          }}
        >
          Continue
        </p>
        <p>
          <Link onClick={nextLevel} to="/">
            Back to menu
          </Link>
        </p>
      </div>
      <iframe
        title="son-champions"
        src={Champions}
        allow="autoplay"
        id="audio"
        style={{ visibility: "hidden" }}
      ></iframe>
    </div>
  );
}

export default ModalWin;
