import React, { useState } from "react";
import Tilt from "react-parallax-tilt"; // Import Tilt component
import "../styles/CritterCard.css"; // Import your custom CSS file
import logo from "/logo.png"; // Import your logo

function CritterCard({ critter, onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    onClick(critter);
  };

  return (
    <Tilt
      tiltReverse
      reset
      glareEnable={critter.shiny || true}
      glareMaxOpacity={0.4}
      glareColor={critter.shiny ? "#f1b818" : "#fff"}
      glarePosition="all"
      className={`card-container`}
    >
      <div className="critter-card">
        <div className="card-inner" onClick={handleCardClick}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${critter.id}.png`}
            alt={critter.name}
            className="card-image"
          />
          <p className="card-name">{critter.name}</p>
        </div>
      </div>
    </Tilt>
  );
}

export default CritterCard;
