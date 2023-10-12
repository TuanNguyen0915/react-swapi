import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"

const ShipDetails = () => {
  const location = useLocation()
  const [selectedShip, setSelectedShip] = useState(location.state.ship)
  console.log(selectedShip);
  return (
    <>
      <h1>Name: {selectedShip.name}</h1>
      <h2>Consumables: {selectedShip.consumables}</h2>
      <h2>Hyperdrive Rating: {selectedShip.hyperdrive_rating}</h2>
      <Link to='/ships' ><button>Return</button></Link>
    </>
  )
}

export default ShipDetails