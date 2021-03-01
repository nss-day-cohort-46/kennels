import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([])

  const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
      .then(response => response.json())
      .then(customers => setCustomers(customers))
  }

  return (
    <CustomerContext.Provider value={{
      customers, getCustomers
    }}>
      {props.children}
    </CustomerContext.Provider>
  )
}
