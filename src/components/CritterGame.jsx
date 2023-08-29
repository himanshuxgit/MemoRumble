import React, { useEffect, useState } from "react";
import useCritters from "./useCritters";
import CritterCard from "./CritterCard";
import "../styles/CritterGame.css";
import logo from "/logo.png";

function CritterGame() {
  const { critters, getRandomCritters, shuffleCritters, setCritters } = useCritters();
  const [selectedCritters, setSelectedCritters] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [score, setScore] = useState(0);
  const [isFirstSelection, setIsFirstSelection] = useState(true);
  const [bestScore, setBestScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state


  useEffect(() => {
    async function fetchData() {
      const randomCritters = await getRandomCritters(10);
      setCritters(randomCritters);
      setIsLoading(false); // Cards are loaded, set loading to false

    }
    fetchData();
  }, []);

  const handleCritterClick = (critter) => {
    if (selectedCritters.some((selected) => selected.id === critter.id)) {
      setSelectedCritters([]);
      setIsShuffling(true);
      setTimeout(() => {
        shuffleCritters();
        setIsShuffling(false);
        setScore(0);
      }, 1000);
    } else {
      setSelectedCritters([...selectedCritters, critter]);
      setIsShuffling(true);
      setTimeout(() => {
        shuffleCritters();
        setIsShuffling(false);
        if (isFirstSelection) {
          setIsFirstSelection(false);
        } else {
          setScore(score + 1);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (bestScore === critters.length - 1 && bestScore !== 0 && !hasWon) {
      setHasWon(true);
      setIsShuffling(true);
      setTimeout(() => {
        shuffleCritters();
        setIsShuffling(false);
      }, 50);
    }
  }, [score, bestScore, critters.length, hasWon]);

  const handleReloadClick = () => {
    window.location.reload(); // Refresh the webpage
  };


  return (
    <div>
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo} alt="MemoRumble Logo" className="logo" />
        </div>
        <h1 className="game-name">MemoRumble</h1>
        <div className="score-bar">
          <div className="score">Score: <span className="score-value">{score}</span></div>
          <div className="best-score">Best Score: <span className="score-value">{bestScore}</span></div>
        </div>
      </nav>
      {isLoading ? ( // Show loading logo while cards are loading
        <div className="loading-logo-container">
          <img src={logo} alt="Loading..." className="loading-logo" />
        </div>
      ) : (
      <div className={`critter-list ${isShuffling ? 'shuffling' : ''}`}>
        {hasWon ? (
          <div className="winning-message">
            <p>You are the best! You won the Game!</p>
            <button className="close-button" onClick={handleReloadClick}>
              Close
            </button>
          </div>
        ) : (
          critters.map((critter) => (
            <CritterCard
              key={critter.id}
              critter={critter}
              onClick={() => handleCritterClick(critter)}
            />
          ))
        )}
      </div>
      )}
    </div>
  );
}

export default CritterGame;
