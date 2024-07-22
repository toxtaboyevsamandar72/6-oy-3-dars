import React, { useState } from "react";
import "./index.css";

const GameNamePicker = () => {
  const gameNames = [
    "PUBG MOBILE",
    "Fudboll",
    "Bekinmachoq",
    "firi fayr",
    "lapak",
  ];

  const [selectedGame, setSelectedGame] = useState("");

  const pickRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * gameNames.length);
    setSelectedGame(gameNames[randomIndex]);
  };

  return (
    <div className="card-game ">
      <h5>4-misol</h5>
      <div className="game-picker-wrapper">
        <h1>O'yin Nomi </h1>
        <button className="game-picker-btn" onClick={pickRandomGame}>
          bosing
        </button>
        {selectedGame && (
          <h2 className="selected-game">{`Tanlangan o'yin: ${selectedGame}`}</h2>
        )}
      </div>
    </div>
  );
};

export default GameNamePicker;
