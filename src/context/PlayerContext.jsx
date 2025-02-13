import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({ name: "", wish: "" });

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};