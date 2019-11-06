import React, { useContext } from "react";
import PancarteUrl from "../Design/Images/pancarte.png";
import { GameContext } from "../providers/GameProvider";

function Pancarte() {
  const { level } = useContext(GameContext);

  return (
    <div style={styles.div}>
      <span style={styles.span}>{level}</span>
    </div>
  );
}

export default Pancarte;

const styles = {
  div: {
    position: "relative",
    backgroundImage: `url(${PancarteUrl})`,
    width: "100%",
    height: "100%",
    backgroundSize: "60%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "55% 85%",
    transform: "rotate(7deg)",
    textAlign: "center"
  },
  span: {
    position: "absolute",
    bottom: "12%",
    fontSize: 24,
    left: "47%",
    fontWeight: "bold",
    color: "white"
  }
};
