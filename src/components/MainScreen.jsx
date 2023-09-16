import React from "react";
import logo from "/logo.png";
import "../styles/MainScreen.css"; // Import your custom CSS for styling

function MainScreen({ onStartGameClick }) {
  return (
    <div>
      <div>
        <nav className="nav-bar">
          <div className="logo-container">
            <img src={logo} alt="MemoRumble Logo" className="logo" />
          </div>
          <h1 className="game-name">MemoRumble</h1>
          <div className="corner">cornervisibil</div>
        </nav>
      </div>
      <div className="main-screen">
        <h1>Welcome to MemoRumble</h1>
        <p className="details">
          Test your memory skills by matching the cards! <br/>Can you find
          all the critters without making a mistake?
        </p>{" "}
        <p className="details">
          Click on a card. Try to remember it,
          and then click on another card. <br/>If they match, your score resets. If
          they don't, you earn a point. Keep
          playing to beat your high score!
        </p>
        <button className="start-button" onClick={onStartGameClick}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default MainScreen;
