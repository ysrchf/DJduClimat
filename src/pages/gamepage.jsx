// pages/GamePage.js

import React from "react"
import GameLayout from "../components/GameLayout"

const GamePage = () => {
  const handleChoice = (choice) => {
    // Mettez ici la logique pour gérer le choix du joueur
    console.log(`Le joueur a choisi : ${choice}`)
  }

  return (
    <GameLayout title="Mon Jeu Textuel">
      <p className="text-lg mb-4">
        Bienvenue dans le jeu textuel! Faites un choix :
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleChoice("Option 1")}
      >
        Option 1
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleChoice("Option 2")}
      >
        Option 2
      </button>
      {/* Ajoutez d'autres choix selon vos besoins */}
    </GameLayout>
  )
}

export default GamePage
