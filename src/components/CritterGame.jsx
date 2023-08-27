import React, { useEffect, useState } from "react";
import useCritters from "./useCritters";
import CritterCard from "./CritterCard";
import "../styles/CritterGame.css"; // Import your custom CSS file
import logo from "/logo.png"

function CritterGame() {
  const { critters, getRandomCritters, shuffleCritters, setCritters } = useCritters();
  const [selectedCritter, setSelectedCritter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const randomCritters = await getRandomCritters(10); // Fetch 9 random Critters
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

  return (<>
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="MemoRumble Logo" className="logo" />
      </div>
      <h1 className="game-name">MemoRumble</h1>
    </nav>
    <div className="critter-list">
      {critters.map((critter) => (
        <CritterCard
          key={critter.id}
          critter={critter}
          onClick={() => handleCritterClick(critter)}
        />
      ))}
    </div></>
  );
}

export default CritterGame;
