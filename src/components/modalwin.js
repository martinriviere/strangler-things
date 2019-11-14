import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Champions from "../Design/Sounds/homer-champions.mp3";
import { GameContext } from "../providers/GameProvider";
import { Translate } from "react-localize-redux";

function ModalWin(props) {
  const { nextLevel, isFxOn } = useContext(GameContext);
  return (
    <div className="container-modal">
      <div className="ModalWin">
        <h2 className="you-win">
          <Translate id="modal.win" />
        </h2>
        <img
          src="https://www.emugifs.net/wp-content/uploads/2019/07/Funny-Animation-from-Episode-The-Simpsons-Homer-Choking-Bart.gif"
          alt="winner"
        />
        <div className="button-section">
          <button>
            <Link onClick={nextLevel} to="/">
              <i class="fas fa-home"></i>
            </Link>
          </button>
          <button
            onClick={() => {
              nextLevel();
              setTimeout(props.initializeGame, 10);
              // props.initializeGame();
            }}
          >
            <i class="fas fa-play"></i>
          </button>
        </div>
      </div>
      {isFxOn && (
        <iframe
          title="son-champions"
          src={Champions}
          allow="autoplay"
          id="audio"
          style={{ visibility: "hidden" }}
        ></iframe>
      )}
    </div>
  );
}

export default ModalWin;
