// components/GameLayout.js

import React from "react"
import Head from "next/head"
import { AppContext } from "../AppContext"
import { useContext } from "react"
import Image from "next/image"

const GameLayout = ({ title, children }) => {
  const { gameState } = useContext(AppContext)
  // Accédez à la variable globale

  let imageSource = ""

  if (gameState.variable <= 10) {
    imageSource = "/../public/image1.png"
  } else if (gameState.variable > 10 && gameState.variable < 20) {
    imageSource = "/../public/image1.png"
  } else if (gameState.variable >= 20) {
    imageSource = "/../public/image1.png"
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        {/* Mettez ici vos balises meta, liens CSS, etc. */}
      </Head>
      <div className="w-full flex justify-center">
        <Image src={imageSource} alt="Image" height={3000} width={3000} />
        <main className="max-w p-4 bg-white rounded shadow-lg">
          {/* Affichez le titre du jeu ici, par exemple : */}
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          {/* Affichez le contenu du jeu ici, par exemple : */}
          {children}
        </main>
      </div>
      <footer className="text-center py-4">
        {/* Mettez ici le contenu du footer si nécessaire */}
      </footer>
      {/* Ajoutez d'autres éléments communs de mise en page ici si nécessaire */}
    </div>
  )
}

export default GameLayout
