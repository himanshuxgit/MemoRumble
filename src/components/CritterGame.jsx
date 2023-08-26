// components/CritterGame.js
import React, { useEffect, useState } from "react";
import useCritters from "./useCritters";
import "../styles/CritterGame.css"; // Import your custom CSS file

function CritterGame() {
  const { critters, getRandomCritters, shuffleCritters, setCritters } = useCritters();
  const [selectedCritter, setSelectedCritter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const randomCritters = await getRandomCritters(10); // Fetch 10 random Critters
      setCritters(randomCritters);
    }
    fetchData();
  }, []);

  const handleCritterClick = (critter) => {
    if (selectedCritter && selectedCritter.id === critter.id) {
      // Handle score increment or game over
    }
    setSelectedCritter(null);
    shuffleCritters();
  };

  return (
    <div className="critter-list">
      {critters.map((critter) => (
        <div
          key={critter.id}
          className={`critter-card ${critter.shiny ? "shiny" : ""}`}
          onClick={() => handleCritterClick(critter)}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${critter.id}.png`}
            alt={critter.name}
          />
          <p>{critter.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CritterGame;
