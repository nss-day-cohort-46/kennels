import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

export const AnimalCard = ({ animalProps, owner, location }) => (
  <section className="animal">
    {/* {console.log(animalProps)} */}
    <h3 className="animal__name">
      <Link to={`/animals/detail/${animalProps.id}`}>
        {animalProps.name}
      </Link>
    </h3>
    <div className="animal__breed">Breed: {animalProps.breed}</div>
    <div className="animal__location">Location: {location.name}</div>
    <div className="animal__customer">Customer: {owner.name}</div>
  </section>
)
