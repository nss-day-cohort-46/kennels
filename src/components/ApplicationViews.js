import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from './employee/EmployeeProvider';
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <CustomerProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route exact path="/animals">
              <AnimalSearch />
              <AnimalList />
            </Route>
            <Route path="/animals/create">
              <AnimalForm />
            </Route>
            <Route exact path="/animals/detail/:animalId(\d+)">
              <AnimalDetail />
            </Route>
            <Route exact path="/animals/edit/:animalId(\d+)">
              <AnimalForm />
            </Route>
          </AnimalProvider>
        </LocationProvider>
      </CustomerProvider>

      {/* Render the location list when http://localhost:3000/locations */}
      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>
    </>
  )
}
