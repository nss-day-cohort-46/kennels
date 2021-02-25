import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([])

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then(response => response.json())
      .then(animalsData => setAnimals(animalsData))
  }

  /*
      You return a context provider which has the
      `animals` state, `getAnimals` function,
      and the `addAnimal` function as keys. This
      allows any child elements to access them.
  */
  return (
    <AnimalContext.Provider value={{
      animals: animals, 
      getAnimals: getAnimals
      // animals, getAnimals
    }}>
      {props.children}
    </AnimalContext.Provider>
  )
}
