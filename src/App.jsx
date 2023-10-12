// npm modules
// import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

// service
import { getAllStarships } from './services/sw-api'

//components
import ShipsList from './components/ShipsList/ShipsList'

import Nav from './components/Nav/Nav'



import './App.css'

function App() {
  const [ships, setShips] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchShips = async () => {
      const shipsData = await getAllStarships()
      setShips(shipsData.results)
      setIsLoading(false)
    }
    fetchShips()
  }, [])

  if (isLoading) return <h2>Loading ships ...</h2>

  return (
    <>
      <Nav />
      <div>
        <ShipsList ships={ships} />
      </div>
    </>
  )
}

export default App
