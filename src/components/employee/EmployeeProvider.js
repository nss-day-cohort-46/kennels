import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const getCustomers = () => {
    return fetch("http://localhost:8088/employees")
      .then(response => response.json())
      .then(response => setEmployees(response))
  }

  return (
    <EmployeeContext.Provider value={{
      employees, setEmployees
    }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}
