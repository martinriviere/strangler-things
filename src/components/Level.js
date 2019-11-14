import React, { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import { Translate } from "react-localize-redux";

function Level() {
  const { level } = useContext(GameContext);
  return (
    <div style={style}>
      <Translate id="level" />
      <br />
      <span style={{ fontSize: "2em" }}>{level}</span>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "20vh",
  right: 10,
  fontSize: 24,
  fontWeight: "bold",
  color: "white",
  fontFamily: "SimpsonFont",
  textShadow: "0 0 10px #000000",
  textAlign: "right"
};

export default Level;
