// pages/GamePage.js

import AppContext from "../AppContext"
import React, { useContext } from "react"
import GameLayout from "../components/GameLayout"
import Link from "next/link"

const Ending = () => {
  const { gameState } = useContext(AppContext)
  let ending = ""

  if (gameState.variable > 0) {
    ending =
      "Nova n'a pas réussi a entendre de nouveau le requiem des planètes mourantes qu'il aime tant. Cependant, le sourire des Hommes vivant en harmonie sur une planète en bonne santé lui procurent un nouveau sentiment agréable jamais ressenti auparavant..."
  } else if (gameState.variable < 0 && gameState.variable >= -15) {
    ending =
      "Nova est sur la bonne voie... Il n'aura pas le climax qu'il attendait mais cette douce mélodie résonne dans ses oreilles..."
  } else if (gameState.variable < -16) {
    ending =
      "Nova peut enfin écouter la douce mélodie qui le fait vibrer... Il contemple cette planète mourante accompagnée de cette belle musique avec extase."
  }

  return (
    <GameLayout title="FIN">
      <p className="text-lg mb-4">{ending}</p>
      <Link legacyBehavior href="/game">
        <button className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded">
          Merci d'avoir joué
        </button>
      </Link>
    </GameLayout>
  )
}

export default Ending
