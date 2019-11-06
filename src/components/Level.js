import React, { useContext } from "react";
import { GameContext } from "../providers/GameProvider";

function Level() {
  const { level } = useContext(GameContext);
  return <div style={style}>level {level}</div>;
}

const style = {
  position: "absolute",
  top: "18vh",
  right: 10,
  fontSize: 20,
  fontWeight: "bold",
  color: "white",
  fontFamily: "SimpsonFont",
  textShadow: "0 0 10px #000000"
};

export default Level;
