// components/useCritters.js

import { useState } from "react";

export default function useCritters() {
  const [critters, setCritters] = useState([]);
  const POSSIBLE_CRITTERS = 151;

  const fetchPokemonData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const getRandomCritters = async (amount) => {
    const shinyProbability = 0.1;
    const crittersToShow = [];

    while (crittersToShow.length < amount) {
      const randomId = Math.floor(Math.random() * POSSIBLE_CRITTERS) + 1;
      const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
      const critterData = await fetchPokemonData(url);

      const isShiny = Math.random() < shinyProbability;
      crittersToShow.push({ ...critterData, shiny: isShiny });
    }

    return crittersToShow;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const shuffleCritters = async () => {
    const shuffledArray = shuffleArray(critters);
    setCritters([]);

    // Delay for animation effect
    await new Promise((resolve) => setTimeout(resolve, 500));

    setCritters(shuffledArray);
  };

  return { critters, getRandomCritters, shuffleCritters, setCritters };
}
