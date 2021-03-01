import React, { useEffect, useContext } from "react"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)


  useEffect(() => {
    console.log("Fetching animals data from API")
    getAnimals()
  }, [])

  return (
    <>
      <h4>Animals</h4>
      <article className="animals">
        {
          animals.map(animalObject => {
            return <AnimalCard key={animalObject.id} animalProps={animalObject} />
          })
        }
      </article>
    </>
  )
}

/*
<AnimalCard key={animal.id} animal={animal} />
is actually doing this:
const props = {
  animal: {
    name: "",
    breed: "",
    ...
  }
}
AnimalCard(props)
*/
