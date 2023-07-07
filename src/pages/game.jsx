// pages/StartPage.js

import React, { useContext } from "react"
import { useRouter } from "next/router"
import { AppContext } from "../AppContext" // Importez le contexte global

const StartPage = () => {
  const router = useRouter()
  const { updateVariable } = useContext(AppContext) // Accédez à la fonction de mise à jour de la variable globale

  const handleStartGame = () => {
    // Mettez à jour la variable globale si nécessaire
    updateVariable(0)
    // Redirigez vers la page du jeu
    router.push("/choix1")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Bienvenue dans DJ du Climat !</h1>
      <p className="text-lg mb-8 font-bold">
        Le jeu à choix impactant sur le destin de la planète
      </p>
      <p className="text-lg mb-8">
        Cliquez sur le bouton pour incarner DJ Nova :
      </p>
      <button
        className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
        onClick={handleStartGame}
      >
        Commencer la partie
      </button>
    </div>
  )
}

export default StartPage
