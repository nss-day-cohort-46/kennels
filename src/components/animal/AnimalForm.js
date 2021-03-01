import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory } from 'react-router-dom';

export const AnimalForm = () => {
  const { addAnimal } = useContext(AnimalContext)

  /*
  Controlled component

  Define the initial state of the form inputs with useState()
  */

  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0
  });

  const history = useHistory();

  const handleControlledInputChange = (event) => {
    //When a field changes, update state. This will re-render and display based on the values in state.

    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newAnimal = { ...animal }

    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newAnimal[event.target.id] = event.target.value

    // Update state
    setAnimal(newAnimal)
  }

  const handleClickSaveAnimal = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationId = parseInt(animal.locationId)
    const customerId = parseInt(animal.customerId)

    if (locationId === 0 || customerId === 0) {
      window.alert("Please select a location and a customer")
    } else {
      //Invoke addAnimal passing the new animal object as an argument
      //Once complete, change the url and display the animal list

      const newAnimal = {
        name: animal.name,
        breed: animal.breed,
        locationId: locationId,
        customerId: customerId
      }
      addAnimal(newAnimal)
        .then(() => history.push("/animals"))
    }
  }

  const handleNameInputChange = (event) => {
    const newAnimal = {
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    }
    newAnimal.name = event.target.value
    setAnimal(newAnimal)
  }

  const handleBreedInputChange = (event) => {
    const newAnimal = {
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    }
    newAnimal.breed = event.target.value
    setAnimal(newAnimal)
  }

  const handleLocationInputChange = (event) => {
    const newAnimal = {
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    }
    newAnimal.locationId = event.target.value
    setAnimal(newAnimal)
  }

  const handleCustomerInputChange = (event) => {
    const newAnimal = {
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    }
    newAnimal.customerId = event.target.value
    setAnimal(newAnimal)
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Animal name" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal breed:</label>
          <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control">
            <option value="0">Select a location</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select name="customer" id="customerId" className="form-control">
            <option value="0">Select a customer</option>
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary">
        Save Animal
      </button>
    </form>
  )
}
