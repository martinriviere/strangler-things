import React, { useState, useEffect } from "react";
import Stars0 from "../Design/Images/stars0.png";
import Stars1 from "../Design/Images/stars1.png";
import Stars2 from "../Design/Images/stars2.png";
import Stars3 from "../Design/Images/stars3.png";

function Stars({ note }) {
  const [imgSrc, setSrc] = useState(Stars0);
  useEffect(() => {
    if (note >= 1 && imgSrc === Stars0) setTimeout(() => setSrc(Stars1), 750);
    if (note >= 2 && imgSrc === Stars1) setTimeout(() => setSrc(Stars2), 750);
    if (note === 3 && imgSrc === Stars2) setTimeout(() => setSrc(Stars3), 750);
  });
  return <img src={imgSrc} style={{ width: "50%", marginTop: "2vh" }} alt="stars-img" />;
}

export default Stars;
