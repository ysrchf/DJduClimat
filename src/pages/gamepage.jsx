// pages/GamePage.js

import React from "react"
import GameLayout from "../components/GameLayout"

const GamePage = () => {
  return (
    <GameLayout title="Mon Jeu Textuel">
      <p className="text-lg mb-4">
        Bienvenue dans le jeu textuel! Faites un choix :
      </p>
      <button className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded">
        Option 1
      </button>

      <button className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded">
        Option 2
      </button>
    </GameLayout>
  )
}

export default GamePage
