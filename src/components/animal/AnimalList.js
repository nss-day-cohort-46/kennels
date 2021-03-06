import React, { useEffect, useContext, useState } from "react"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {

  // The useHistory hook let's us tell React which route we want to visit. We will use it to tell React to render the animal form component.
  const history = useHistory()

  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const { locations, getLocations } = useContext(LocationContext)

  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    console.log("Fetching animals data from API")
    getLocations()
      .then(getCustomers)
      .then(getAnimals)
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      {/* {console.log("Data for AnimalList", animals, customers, locations)} */}
      <h4>Animals</h4>
      <button onClick={() => { history.push("/animals/create") }}>Add Animal</button>
      <article className="animals">
        {
          filtered.map(animalObject => {
            const owner = customers.find(c => c.id === animalObject.customerId)
            const location = locations.find(l => l.id === animalObject.locationId)
            return <AnimalCard key={animalObject.id} animalProps={animalObject} owner={owner} location={location} />
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
