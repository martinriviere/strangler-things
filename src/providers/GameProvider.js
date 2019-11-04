import React, { createContext } from "react";

export const GameContext = createContext();

function GameProvider(props) {
  let level = 1;
  const levelInc = () => level++;
  return (
    <GameContext.Provider value={{ level: level, levelInc: levelInc }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameProvider;
