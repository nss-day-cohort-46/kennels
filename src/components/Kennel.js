import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

import "./Kennel.css"

export const Kennel = () => (

  <>
    <NavBar />
    <ApplicationViews />
  </>

)
