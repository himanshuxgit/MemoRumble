import React, { useState } from "react";
import MainScreen from "./MainScreen";
import CritterGame from "./CritterGame";

function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div>
      {!isGameStarted ? (
        <MainScreen onStartGameClick={startGame} />
      ) : (
        <CritterGame />
      )}
    </div>
  );
}

export default Game;
