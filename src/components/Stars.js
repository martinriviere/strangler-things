import React, { useState, useEffect } from "react";
import Stars0 from "../Design/Images/stars0.png";
import Stars1 from "../Design/Images/stars1.png";
import Stars2 from "../Design/Images/stars2.png";
import Stars3 from "../Design/Images/stars3.png";

function Stars({ note }) {
  const [imgSrc, setSrc] = useState(Stars0);
  useEffect(() => {
    if (note >= 1 && imgSrc === Stars0) {
      const x = setTimeout(() => setSrc(Stars1), 750);
      return () => window.clearInterval(x);
    }
    if (note >= 2 && imgSrc === Stars1) {
      const y = setTimeout(() => setSrc(Stars2), 750);
      return () => window.clearInterval(y);
    }
    if (note === 3 && imgSrc === Stars2) {
      const z = setTimeout(() => setSrc(Stars3), 750);
      return () => window.clearInterval(z);
    }
  });
  return (
    <img
      src={imgSrc}
      style={{ width: "50%", marginTop: "2vh" }}
      alt="stars-img"
    />
  );
}

export default Stars;
