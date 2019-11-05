import React, { createContext, useState } from "react";

export const GameContext = createContext();

function GameProvider(props) {
  const [level, setLevel] = useState(localStorage.getItem("level") || 1);
  return (
    <GameContext.Provider value={{ level: level, setLevel: setLevel }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameProvider;
