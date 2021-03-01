import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route path="/animals">
        <AnimalProvider>
          <AnimalList />
        </AnimalProvider>
      </Route>

      <Route path="/locations">
        <LocationList />
      </Route>

      <Route path="/customers">
        <CustomerList />
      </Route>

      <Route path="/employees">
        <EmployeeList />
      </Route>
    </>
  )
}
