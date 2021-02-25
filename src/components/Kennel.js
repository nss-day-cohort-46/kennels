import React, { useState, useEffect } from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./Kennel.css"

export const Kennel = () => {
  // let counter = 1
  let [counter, setCounter] = useState(1)

  const [kennel, setKennel] = useState({
    name: "Nashville Kennels: #1 in Davidson County",
    locations: [
      {
        name: "Nashville North",
        address: "500 Puppy Way"
      }
    ]
  })

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    console.log("Fetching animals data from API")
    fetch("http://localhost:8088/animals")
      .then(response => response.json())
      .then(animalsData => setAnimals(animalsData))
  }, [])

  // useEffect(() => {
  //   console.log("useEffect that runs every time counter changes")
  // }, [counter])

  const incrementCounter = () => {
    // debugger
    const newCounterValue = ++counter

    // DO NOT DO: counter = newCounterValue
    setCounter(newCounterValue)
    // console.log("counter", counter)
    // console.log("setCounter", setCounter)
  }

  // debugger

  return (
    <>
      {console.log("render jsx")}
      <h2>{kennel.name}</h2>
      <small>Loving care when you're not there.</small>
      <address>
        <div>Visit Us at the {kennel.locations[0].name} Location</div>
        <div>{kennel.locations[0].address}</div>
      </address>
      <article>
        <div>Currently helping #{counter}</div>
        <button onClick={incrementCounter}>Take a number</button>
      </article>
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
