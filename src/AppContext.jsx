import React, { createContext, useState } from "react"

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    // Initialisez votre variable globale ici

    variable: 0,
    
  })

  const updateVariable = (value) => {
    setGameState((prevState) => ({
      ...prevState,
      variable: value,
    }))
  }

  return (
    <AppContext.Provider value={{ gameState, setGameState, updateVariable }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppContext
