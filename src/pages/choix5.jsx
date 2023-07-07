// pages/GamePage.js

import AppContext from "../AppContext"
import React, { useState, useContext } from "react"
import GameLayout from "../components/GameLayout"
import Modal from "../components/Modal"
import Router from "next/router"

const Choix5 = () => {
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
    if (choice == "Option1") {
      updateVariable(gameState.variable - 6)
      Router.push("/choix6")
    } else if (choice == "Option2") {
      updateVariable(gameState.variable - 3)
      Router.push("/choix6")
    } else if (choice == "Option3") {
      updateVariable(gameState.variable + 3)
      Router.push("/choix6")
    } else if (choice == "Option4") {
      updateVariable(gameState.variable + 6)
      Router.push("/choix6")
    }
  }

  return (
    <GameLayout title="Entreprises">
      <p className="text-lg mb-4">Faites un choix :</p>
      <div className="flex items-center justify-center space-x-4 ">
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option1")}
          >
            Déforestation et construction d'entreprises
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
          title="Déforestation et construction d'entreprises"
        >
          <p>
            Vous pouvez encourager la déforestation pour permettre la
            construction d'entreprises sans restrictions. Cette approche
            favorise la croissance économique rapide et l'expansion des
            entreprises, mais elle a des conséquences graves sur la
            biodiversité, la perte d'habitats, la dégradation des sols et les
            émissions de gaz à effet de serre. Cela peut également entraîner des
            conflits avec les communautés locales et un déséquilibre écologique.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option2")}
          >
            Entreprise libre de faire ce qu'elle veut
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
          title="Entreprise libre de faire ce qu'elle veut"
        >
          <p>
            Vous pouvez adopter une approche de libre marché où les entreprises
            sont autorisées à agir sans contrainte réglementaire ou
            environnementale. Cela favorise la liberté d'entreprise, mais cela
            peut conduire à des abus, à une exploitation excessive des
            ressources naturelles, à une pollution accrue et à des inégalités
            sociales. Cette approche peut également entraver la préservation de
            l'environnement et négliger les intérêts des communautés locales.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option3")}
          >
            Régulation des entreprises
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
          title="Régulation des entreprises "
        >
          <p>
            Vous pouvez mettre en place des régulations strictes pour encadrer
            les activités des entreprises, en particulier celles qui ont un
            impact sur l'environnement. Cela implique des normes
            environnementales strictes, des contrôles de pollution et des
            exigences de durabilité. Cette approche vise à protéger
            l'environnement et à préserver les ressources naturelles, mais elle
            peut également être perçue comme un fardeau réglementaire pour les
            entreprises et nécessiter une surveillance et une application
            rigoureuses.
          </p>
        </Modal>
        <div className="bg-blue-500 rounded hover:bg-blue-700 relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option4")}
          >
            Préservation de la nature et interdiction des entreprises
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
          title="Préservation de la nature et interdiction des entreprises"
        >
          <p>
            Vous pouvez privilégier la préservation de la nature en interdisant
            les activités commerciales qui ont un impact significatif sur
            l'environnement. Cela implique une protection stricte des
            écosystèmes, la création de réserves naturelles et l'interdiction
            des industries extractives ou polluantes. Cette approche vise à
            préserver la biodiversité, la qualité de l'air et de l'eau, mais
            cela peut entraîner des implications économiques, telles que la
            perte d'emplois et la réduction de la croissance économique.
          </p>
        </Modal>
      </div>
    </GameLayout>
  )
}

export default Choix5
