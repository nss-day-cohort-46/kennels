import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const CustomerProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
      .then(response => response.json())
      .then(setLocations)
  }

  return (
    <LocationContext.Provider value={{
      locations, setLocations
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}
