import React, { Component } from "react";
import bart from "../Design/Personnages/bart-lance-pierres.png";
import homer from "../Design/Personnages/homer-dos.png";

const charactersStyle = {
  position: "absolute",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};
const bartStyle = {
  height: "20vh",
  top: "1vh",
  zIndex: -1
};
const homerStyle = {
  bottom: "-5vh",
  height: "40vh",
  zIndex: 2
};
class Characters extends Component {
  render() {
    return (
      <div
        id="characters"
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw"
        }}
      >
        <img
          style={{ ...bartStyle, ...charactersStyle }}
          src={bart}
          alt="bart"
        />
        <img
          style={{ ...homerStyle, ...charactersStyle }}
          src={homer}
          alt="homer"
        ></img>
      </div>
    );
  }
}

export default Characters;
