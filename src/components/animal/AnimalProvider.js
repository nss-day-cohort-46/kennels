import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then(response => response.json())
      .then(animalsData => setAnimals(animalsData))
  }

  const getAnimalById = (id) => {
    return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
      .then(res => res.json())
  }

  const addAnimal = animal => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    })
      .then(response => response.json())
  }

  const updateAnimal = animal => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    })
      .then(getAnimals)
  }

  const releaseAnimal = animalId => {
    return fetch(`http://localhost:8088/animals/${animalId}`, {
      method: "DELETE"
    })
      .then(getAnimals)
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
      getAnimals: getAnimals,
      addAnimal: addAnimal,
      getAnimalById: getAnimalById,
      releaseAnimal: releaseAnimal,
      updateAnimal: updateAnimal,
      searchTerms: searchTerms,
      setSearchTerms: setSearchTerms
      // animals, getAnimals, getAnimalById, releaseAnimal, updateAnimal
    }}>
      {props.children}
    </AnimalContext.Provider>
  )
}
