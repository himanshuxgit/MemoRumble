import React, { useEffect, useState } from "react";
import useCritters from "./useCritters";
import CritterCard from "./CritterCard";
import "../styles/CritterGame.css"; // Import your custom CSS file
import logo from "/logo.png";

function CritterGame() {
  const { critters, getRandomCritters, shuffleCritters, setCritters } = useCritters();
  const [selectedCritter, setSelectedCritter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const randomCritters = await getRandomCritters(9); // Fetch 9 random Critters
      setCritters(randomCritters);
      setIsLoading(false); // Data is loaded, set isLoading to false
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
    <div>
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo} alt="MemoRumble Logo" className="logo" />
        </div>
        <h1 className="game-name">MemoRumble</h1>
      </nav>
      {isLoading ? (
        <div className="loading-container">
          <img src={logo} alt="Loading" className="loading-logo" />
        </div>
      ) : (
        <div className="critter-list">
          {critters.map((critter) => (
            <CritterCard
              key={critter.id}
              critter={critter}
              onClick={() => handleCritterClick(critter)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CritterGame;
