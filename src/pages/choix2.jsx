// pages/GamePage.js

import AppContext from "../AppContext"
import React, { useState, useContext } from "react"
import GameLayout from "../components/GameLayout"
import Modal from "../components/Modal"
import Router from "next/router"

const Choix2 = () => {
  const [isModal1Open, setIsModal1Open] = useState(false)
  const [isModal2Open, setIsModal2Open] = useState(false)
  const [isModal3Open, setIsModal3Open] = useState(false)
  const { gameState, updateVariable } = useContext(AppContext)

  const handleOpenModal1 = () => {
    setIsModal1Open(true)
  }

  const handleCloseModal1 = () => {
    setIsModal1Open(false)
  }

  const handleOpenModal2 = () => {
    setIsModal2Open(true)
  }

  const handleCloseModal2 = () => {
    setIsModal2Open(false)
  }

  const handleOpenModal3 = () => {
    setIsModal3Open(true)
  }

  const handleCloseModal3 = () => {
    setIsModal3Open(false)
  }

  const handleChoice = (choice) => {
    // Mettez ici la logique pour gérer le choix du joueur

    if (choice == "Option1") {
      updateVariable(gameState.variable + 6)
      Router.push("/choix3")
    } else if (choice == "Option2") {
      updateVariable(gameState.variable + 2)
      Router.push("/choix3")
    } else if (choice == "Option3") {
      updateVariable(gameState.variable - 5)
      Router.push("/choix3")
    }
  }

  return (
    <GameLayout title="Mon Jeu Textuel">
      <p className="text-lg mb-4">
        Bienvenue dans le jeu textuel! Faites un choix :
      </p>
      <div className="flex items-center justify-center space-x-4 ">
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option1")}
          >
            Transports en commun
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal1}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal1Open}
          onClose={handleCloseModal1}
          title="Transports en commun"
        >
          <p>
            Vous pouvez opter pour un investissement massif dans les transports
            en commun, tels que les trains, les métros, les tramways et les bus.
            Cela permettrait de réduire la dépendance à la voiture individuelle,
            de diminuer les émissions de gaz à effet de serre et de désengorger
            les routes. Cette option favorise une mobilité durable et offre des
            avantages en termes de qualité de l'air, de réduction des
            embouteillages et de promotion de l'accessibilité pour tous.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option2")}
          >
            Voiture
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal2}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal2Open}
          onClose={handleCloseModal2}
          title="Voiture"
        >
          <p>
            Le joueur peut encourager l'utilisation des voitures individuelles,
            tout en mettant en place des politiques pour promouvoir les
            véhicules économes en carburant et à faibles émissions. Cela
            permettrait aux individus de conserver leur indépendance en matière
            de déplacement tout en incitant à des choix de véhicules plus
            respectueux de l'environnement. Cette option offre une flexibilité
            mais maintient une empreinte carbone significative et contribue à la
            congestion routière.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option3")}
          >
            Voiture sportive
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal3}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal3Open}
          onClose={handleCloseModal3}
          title="Voiture sportive"
        >
          <p>
            Le joueur peut encourager l'utilisation de voitures sportives,
            mettant l'accent sur les performances et l'esthétique plutôt que sur
            l'efficacité énergétique. Cela serait attrayant pour les amateurs de
            conduite sportive, mais ces véhicules ont généralement une
            consommation de carburant élevée et émettent davantage de gaz à
            effet de serre. Cette option serait moins favorable sur le plan
            environnemental et pourrait contribuer à une augmentation de la
            pollution atmosphérique et sonore.
          </p>
        </Modal>
      </div>
    </GameLayout>
  )
}

export default Choix2
