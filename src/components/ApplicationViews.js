import React from "react"
import { Route, Redirect } from "react-router-dom"
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
import { About } from "./About"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <CustomerProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route exact path="/animals">
              <AnimalSearch />
              <AnimalList />
            </Route>

            <Route exact path="/animals/create" render={() => localStorage.getItem("kennel_customer") ? <AnimalForm /> : <Redirect to="/login" />} />

            <Route exact path="/animals/detail/:animalId(\d+)" render={() => localStorage.getItem("kennel_customer") ? <AnimalDetail /> : <Redirect to="/login" />} />

            <Route exact path="/animals/edit/:animalId(\d+)" render={() => localStorage.getItem("kennel_customer") ? <AnimalForm /> : <Redirect to="/login" />} />

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

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  )
}
