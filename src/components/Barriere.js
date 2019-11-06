import React from "react";
import BarriereUrl from "../Design/Images/barriere.png";
import Pancarte from "./Pancarte";

function Barriere({ right, pancarte }) {
  return (
    <div style={{ ...style, right: right && 0 }}>
      {pancarte && <Pancarte />}
    </div>
  );
}

export default Barriere;

const style = {
  backgroundImage: `url(${BarriereUrl})`,
  width: "28.6vw",
  height: "20vh",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  position: "absolute",
  bottom: "82vh"
};
