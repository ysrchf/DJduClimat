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

  if (gameState.variable <= 10 && gameState.variable >= 0) {
    imageSource = "/../public/image1.png"
  } else if (gameState.variable > 10 && gameState.variable < 20) {
    imageSource = "/../public/image1.png"
  } else if (gameState.variable >= 20) {
    imageSource = "/../public/image1.png"
  } else if (gameState.variable < 0 && gameState.variable >= -15) {
    imageSource = "/../public/image2.png"
  } else if (gameState.variable < -16) {
    imageSource = "/../public/image3.png"
  }

 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full flex justify-center">
        <Image
          src={imageSource}
          alt="Image"
          height="2400"
          width="2400"
          className="w-1/2"
        />
        <main className=" p-4 bg-white rounded shadow-lg ">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          {children}
        </main>
      </div>
      <footer className="text-center py-4"></footer>
    </div>
  )
}

export default GameLayout
