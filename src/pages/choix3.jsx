// pages/GamePage.js

import AppContext from "../AppContext"
import React, { useState, useContext } from "react"
import GameLayout from "../components/GameLayout"
import Modal from "../components/Modal"
import Router from "next/router"

const Choix3 = () => {
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
      updateVariable(gameState.variable - 2)
      Router.push("/choix4")
    } else if (choice == "Option2") {
      updateVariable(gameState.variable + 1)
      Router.push("/choix4")
    } else if (choice == "Option3") {
      updateVariable(gameState.variable + 5)
      Router.push("/choix4")
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
            Béton
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
            Vous pouvez favoriser l'utilisation du béton comme matériau de
            construction principal. Le béton est durable, résistant et largement
            utilisé dans l'industrie de la construction. Cependant, la
            production de béton nécessite d'importantes quantités de ressources
            naturelles et génère des émissions de gaz à effet de serre. Cette
            option offre une construction solide, mais elle peut avoir un impact
            environnemental élevé.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option2")}
          >
            Carbone
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
          title="Carbone"
        >
          <p>
            Vous pouvez vous concentrer sur l'utilisation de matériaux à faible
            empreinte carbone dans la construction. Cela inclut des matériaux
            tels que les matériaux recyclés, les composites à base de fibres de
            carbone ou d'autres matériaux innovants à faible émission de
            carbone. Cette option permet de réduire l'impact environnemental en
            favorisant des matériaux plus durables et moins polluants.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option3")}
          >
            Bois
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal3}
          >
            ?
          </button>
        </div>
        <Modal isOpen={isModal3Open} onClose={handleCloseModal3} title="Bois">
          <p>
            Vous pouvez promouvoir l'utilisation du bois comme matériau de
            construction principal. Le bois est renouvelable, biodégradable et
            peut stocker le carbone pendant toute la durée de vie du bâtiment.
            En favorisant la construction en bois, le joueur contribue à la
            réduction des émissions de gaz à effet de serre et encourage
            l'utilisation de ressources renouvelables. Cette option offre une
            approche durable de la construction, en favorisant la préservation
            des forêts et une meilleure gestion des ressources naturelles.
          </p>
        </Modal>
      </div>
    </GameLayout>
  )
}

export default Choix3
