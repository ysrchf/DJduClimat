// pages/GamePage.js

import AppContext from "../AppContext"
import React, { useState, useContext } from "react"
import GameLayout from "../components/GameLayout"
import Modal from "../components/Modal"
import Router from "next/router"

const Choix4 = () => {
  const [isModal1Open, setIsModal1Open] = useState(false)
  const [isModal2Open, setIsModal2Open] = useState(false)
  const [isModal3Open, setIsModal3Open] = useState(false)
  const [isModal4Open, setIsModal4Open] = useState(false)
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

  const handleOpenModal4 = () => {
    setIsModal4Open(true)
  }

  const handleCloseModal4 = () => {
    setIsModal4Open(false)
  }

  const handleChoice = (choice) => {
    // Mettez ici la logique pour gérer le choix du joueur

    if (choice == "Option1") {
      updateVariable(gameState.variable - 4)
      Router.push("/choix5")
    } else if (choice == "Option2") {
      updateVariable(gameState.variable + 1)
      Router.push("/choix5")
    } else if (choice == "Option3") {
      updateVariable(gameState.variable + 3)
      Router.push("/choix5")
    } else if (choice == "Option4") {
      updateVariable(gameState.variable + 5)
      Router.push("/choix5")
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
            6 enfants ou +
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal1}
          >
            ?
          </button>
        </div>
        <Modal isOpen={isModal1Open} onClose={handleCloseModal1} title="Béton">
          <p>
            Vous pouvez promouvoir une politique encourageant les familles à
            avoir six enfants ou plus. Cela peut être perçu comme une approche
            traditionnelle favorisant une croissance démographique rapide.
            Cependant, cela peut entraîner une pression accrue sur les
            ressources naturelles, la surpopulation et des difficultés dans la
            fourniture de services essentiels tels que l'éducation et les soins
            de santé.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option2")}
          >
            4 à 5 enfants
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
          title="4 à 5 enfants"
        >
          <p>
            Vous pouvez encourager une politique de famille encourageant les
            familles à avoir entre quatre et cinq enfants. Cette approche vise à
            maintenir une taille de famille relativement grande tout en
            cherchant à atténuer les pressions démographiques excessives.
            Cependant, cela nécessite une gestion prudente des ressources et une
            planification adéquate pour répondre aux besoins des familles
            nombreuses.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option3")}
          >
            2 à 3 enfants
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
          title="2 à 3 enfants "
        >
          <p>
            Vous pouvez promouvoir une politique familiale encourageant les
            familles à avoir entre deux et trois enfants. Cette approche vise à
            maintenir une taille de famille modérée, favorisant un équilibre
            entre les besoins individuels et la pression démographique. Cela
            permettrait une meilleure planification familiale et pourrait
            contribuer à réduire la pression sur les ressources naturelles.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option4")}
          >
            0 à 1 enfant
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal4}
          >
            ?
          </button>
        </div>
        <Modal isOpen={isModal4Open} onClose={handleCloseModal4} title="Bois">
          <p>
            Vous pouvez mettre en place une politique encourageant les familles
            à avoir zéro à un enfant. Cette approche vise à promouvoir la
            planification familiale et à réduire la croissance démographique.
            Elle permettrait de réduire la pression sur les ressources
            naturelles, d'améliorer la qualité de vie des individus et de
            permettre une meilleure allocation des ressources publiques.
            Cependant, cela nécessite une sensibilisation accrue et des
            politiques de soutien pour les couples sans enfant.
          </p>
        </Modal>
      </div>
    </GameLayout>
  )
}

export default Choix4
