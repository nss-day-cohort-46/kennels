import React, { useState } from "react"

export const Home = () => {
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
    </>
  )
}
