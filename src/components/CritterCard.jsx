import React from "react";
import "../styles/CritterCard.css"; // Import your custom CSS file


function CritterCard({ critter, onClick }) {
  return (
    <div
      className={`critter-card ${critter.shiny ? "shiny" : ""}`}
      onClick={onClick}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${critter.id}.png`}
        alt={critter.name}
      />
      <p>{critter.name}</p>
    </div>
  );
}

export default CritterCard;
