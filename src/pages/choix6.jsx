// pages/GamePage.js

import AppContext from "../AppContext"
import React, { useState, useContext } from "react"
import GameLayout from "../components/GameLayout"
import Modal from "../components/Modal"
import Router from "next/router"

const Choix6 = () => {
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
      updateVariable(gameState.variable - 7)
      Router.push("/ending")
    } else if (choice == "Option2") {
      updateVariable(gameState.variable - 2)
      Router.push("/ending")
    } else if (choice == "Option3") {
      updateVariable(gameState.variable + 3)
      Router.push("/ending")
    } else if (choice == "Option4") {
      updateVariable(gameState.variable + 5)

      Router.push("/ending")
    }
  }

  return (
    <GameLayout title="La technologie">
      <p className="text-lg mb-4">
        Bienvenue dans le jeu textuel! Faites un choix :
      </p>
      <div className="flex items-center justify-center space-x-4 ">
        <div className="bg-orangedjrounded  hover:bg-orange-300 relative">
          <button
            className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option1")}
          >
            Technologie militaire
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-700 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal1}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal1Open}
          onClose={handleCloseModal1}
          title="Technologie militaire"
        >
          <p>
            Vous pouvez privilégier le développement de la technologie militaire
            en investissant massivement dans les armements et les équipements
            militaires avancés. Cela pourrait renforcer la puissance militaire
            et la sécurité, mais cela nécessite des ressources considérables et
            peut détourner l'attention des autres domaines de développement.
          </p>
        </Modal>
        <div className="bg-orangedjrounded  hover:bg-orange-300 relative">
          <button
            className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option2")}
          >
            Technologie sur le rendement
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-700 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal2}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal2Open}
          onClose={handleCloseModal2}
          title="Technologie sur le rendement"
        >
          <p>
            Vous pouvez choisir de promouvoir le développement de technologies
            axées sur l'efficacité et la productivité, telles que
            l'automatisation, l'intelligence artificielle et les innovations
            industrielles. Cela peut permettre des gains d'efficacité économique
            et une amélioration des performances, mais cela pourrait également
            avoir des conséquences sociales, telles que la perte d'emplois ou la
            dépendance excessive à la technologie.
          </p>
        </Modal>
        <div className="bg-orangedjrounded  hover:bg-orange-300 relative">
          <button
            className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option3")}
          >
            Technologie du savoir
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-700 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal3}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal3Open}
          onClose={handleCloseModal3}
          title="Technologie du savoir"
        >
          <p>
            Le joueur peut se concentrer sur le développement de la technologie
            de l'information, de la communication et de l'éducation. Cela
            pourrait inclure des investissements dans l'accès à l'éducation, la
            recherche scientifique et la diffusion du savoir. Cette approche
            favorise la diffusion des connaissances, la croissance de la société
            de l'information et le développement humain, mais cela nécessite des
            investissements à long terme.
          </p>
        </Modal>
        <div className="bg-orangedjrounded  hover:bg-orange-300 relative">
          <button
            className="bg-orangedj hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChoice("Option4")}
          >
            Technologie sans carbone très coûteuse
          </button>
          <button
            className="absolute top-0 right-0 w-4 h-4 bg-red-700 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
            onClick={handleOpenModal4}
          >
            ?
          </button>
        </div>
        <Modal
          isOpen={isModal4Open}
          onClose={handleCloseModal4}
          title="Technologie sans carbone très coûteuse "
        >
          <p>
            Le joueur peut se concentrer sur le développement de technologies
            sans carbone, même si elles sont coûteuses. Cela inclut des
            investissements massifs dans les énergies renouvelables, les
            technologies de captage et de stockage du carbone, et les transports
            propres. Cette approche vise à réduire les émissions de gaz à effet
            de serre et à lutter contre le changement climatique, mais cela
            nécessite des ressources financières considérables.
          </p>
        </Modal>
      </div>
    </GameLayout>
  )
}

export default Choix6
