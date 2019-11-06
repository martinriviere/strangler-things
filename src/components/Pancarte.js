import React, { useContext } from "react";
import PancarteUrl from "../Design/Images/pancarte.png";
import { GameContext } from "../providers/GameProvider";

function Pancarte() {
  const { level } = useContext(GameContext);

  return (
    <div style={styles.div}>
      <div style={styles.span}>{level}</div>
    </div>
  );
}

export default Pancarte;

const styles = {
  div: {
    position: "relative",
    backgroundImage: `url(${PancarteUrl})`,
    width: "20vw",
    height: "14vw",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "55% 85%",
    transform: "rotate(7deg)",
    textAlign: "center",
    top: "22%",
    left: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  span: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    fontFamily: "SimpsonFont"
  }
};
