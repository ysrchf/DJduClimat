// pages/GamePage.js

import AppContext from "../AppContext"
import React, { useState, useContext } from "react"
import GameLayout from "../components/GameLayout"
import Modal from "../components/Modal"
import Router from "next/router"

const GamePage = () => {
  const [isModal1Open, setIsModal1Open] = useState(false)
  const [isModal2Open, setIsModal2Open] = useState(false)
  const [isModal3Open, setIsModal3Open] = useState(false)
  const [isModal4Open, setIsModal4Open] = useState(false)
  const [isModal5Open, setIsModal5Open] = useState(false)
  const [isModal6Open, setIsModal6Open] = useState(false)
  const [isModal7Open, setIsModal7Open] = useState(false)
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
  const handleOpenModal5 = () => {
    setIsModal5Open(true)
  }

  const handleCloseModal5 = () => {
    setIsModal5Open(false)
  }
  const handleOpenModal6 = () => {
    setIsModal6Open(true)
  }

  const handleCloseModal6 = () => {
    setIsModal6Open(false)
  }

  const handleOpenModal7 = () => {
    setIsModal7Open(true)
  }

  const handleCloseModal7 = () => {
    setIsModal7Open(false)
  }

  const handleChoice = (choice) => {
    // Mettez ici la logique pour gérer le choix du joueur

    if (choice == "Option1") {
      updateVariable(gameState.variable - 6)
    } else if (choice == "Option2") {
      updateVariable(gameState.variable - 3)
    } else if (choice == "Option3") {
      updateVariable(gameState.variable - 3)
    } else if (choice == "Option4") {
      updateVariable(gameState.variable + 3)
    } else if (choice == "Option5") {
      updateVariable(gameState.variable + 4)
    } else if (choice == "Option6") {
      updateVariable(gameState.variable + 6)
    } else if (choice == "Option7") {
      updateVariable(gameState.variable + 8)
    }
    
    Router.push("/gamepage")
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
            Charbon
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
          title="Charbon"
        >
          <p>
            Le charbon est une source d'énergie fossile polluante, largement
            utilisée dans le passé pour la production d'électricité. Cependant,
            il contribue de manière significative aux émissions de gaz à effet
            de serre et à la dégradation de la qualité de l'air. En choisissant
            cette option, Nova favorise une approche traditionnelle mais néfaste
            pour l'environnement.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option2")}
          >
            Pétrole
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
          title="Pétrole"
        >
          <p>
            Le pétrole et le gaz naturel sont également des sources d'énergie
            fossile, largement utilisées dans divers secteurs industriels et
            pour le transport. Cependant, ils sont responsables de la pollution
            atmosphérique et des émissions de gaz à effet de serre. En
            choisissant cette option, Nova soutient des industries déjà établies
            mais peu respectueuses de l'environnement.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option3")}
          >
            Gaz Naturel
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
          title="Gaz Naturel"
        >
          <p>
            Le pétrole et le gaz naturel sont également des sources d'énergie
            fossile, largement utilisées dans divers secteurs industriels et
            pour le transport. Cependant, ils sont responsables de la pollution
            atmosphérique et des émissions de gaz à effet de serre. En
            choisissant cette option, Nova soutient des industries déjà établies
            mais peu respectueuses de l'environnement.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option4")}
          >
            Nucléaire
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal4}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal4Open}
          onClose={handleCloseModal4}
          title="Nucléaire"
        >
          <p>
            L'énergie nucléaire est une source d'énergie non fossile qui produit
            une grande quantité d'électricité sans émissions de gaz à effet de
            serre. Cependant, la gestion des déchets nucléaires et les risques
            associés à l'énergie nucléaire soulèvent des préoccupations
            environnementales et de sécurité. En choisissant cette option, Nova
            opte pour une solution controversée mais potentiellement moins
            polluante.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option5")}
          >
            Bioénergie
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal5}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal5Open}
          onClose={handleCloseModal5}
          title="Bioénergie"
        >
          <p>
            La bioénergie utilise des sources renouvelables, telles que la
            biomasse et les biocarburants, pour produire de l'énergie.
            Cependant, l'utilisation intensive de terres agricoles pour la
            production de biocarburants peut entraîner la déforestation et la
            compétition avec les cultures alimentaires. En choisissant cette
            option, Nova favorise une approche énergétique plus durable mais
            susceptible de poser des problèmes d'utilisation des terres.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option6")}
          >
            Énergies renouvelables
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal6}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal6Open}
          onClose={handleCloseModal6}
          title="Énergies renouvelables"
        >
          <p>
            Les énergies renouvelables, telles que l'énergie solaire, éolienne
            et hydraulique, tirent parti des ressources naturelles illimitées et
            produisent peu ou pas d'émissions de gaz à effet de serre. En
            choisissant cette option, Nova favorise une transition vers des
            sources d'énergie plus propres et plus durables, bien que cela
            nécessite des investissements initiaux importants et une
            infrastructure adéquate.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option7")}
          >
            Zéro carbone
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal7}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal7Open}
          onClose={handleCloseModal7}
          title="Zéro carbone "
        >
          <p>
            Le zéro carbone englobe un ensemble de technologies et de pratiques
            visant à éliminer complètement les émissions de carbone. Cela peut
            inclure des mesures telles que la captation et le stockage du
            carbone, l'utilisation d'énergies renouvelables et d'autres
            innovations technologiques. En choisissant cette option, Nova
            s'engage résolument dans une approche de lutte contre le changement
            climatique, bien que cela puisse nécessiter des efforts et des
            investissements importants.
          </p>
        </Modal>
      </div>

      {/* Ajoutez d'autres choix selon vos besoins */}
    </GameLayout>
  )
}

export default GamePage
