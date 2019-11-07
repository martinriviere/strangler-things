import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Champions from "../Design/Sounds/homer-champions.mp3";
import { GameContext } from "../providers/GameProvider";

function ModalWin(props) {
  const { nextLevel } = useContext(GameContext);
  return (
    <div className="container-modal">
      <div className="ModalWin">
        <h2 className="you-win">YOU WIN !!</h2>
        <img
          src="http://giphygifs.s3.amazonaws.com/media/A6aHBCFqlE0Rq/giphy.gif"
          alt="winner"
        />
        <p
          onClick={() => {
            props.initializeGame();
            nextLevel();
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
