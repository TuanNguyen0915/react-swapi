import { Route, Routes, useNavigate } from 'react-router-dom'

import ShipsList from './pages/ShipsList/ShipsList'
import ShipDetails from './pages/ShipDetails/ShipDetails'
import Nav from './components/Nav/Nav'


import './App.css'

function App() {

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/ships' element={<ShipsList />}  />
        <Route path='/ships/details' element={<ShipDetails />}  />
      </Routes>
    </>
  )
}

export default App
