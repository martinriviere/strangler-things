import React from "react";
import bart from "../Design/Personnages/bart-lance-pierres.png";
import homer from "../Design/Personnages/homer-dos1.png";
import "./Characters.css";

const charactersStyle = {
  position: "absolute",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat"
};
const bartStyle = {
  height: "20vh",
  top: "1vh",
  zIndex: -3
};
const homerStyle = {
  bottom: "-5vh",
  height: "30vh",
  width: "100vw",
  zIndex: -1,
  backgroundImage: `url(${homer})`
};
function Characters(props) {
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
      <img style={{ ...bartStyle, ...charactersStyle }} src={bart} alt="bart" />
      <img
        style={{
          ...homerStyle,
          ...charactersStyle
        }}
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        alt="homer"
        className={props.movement}
      ></img>
    </div>
  );
}

export default Characters;
