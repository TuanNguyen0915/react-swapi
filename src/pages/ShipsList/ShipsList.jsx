import { getAllStarships } from '../../services/sw-api'
import { useEffect, useState } from 'react'
import Ship from '../../components/Ship/Ship'
import styles from './ShipsList.module.css'

const ShipList = () => {
  const [ships, setShips] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchShipData = async () => {
      setIsLoading(true)
      const shipData = await getAllStarships()
      setShips(shipData.results)

      setIsLoading(false)
    }
    fetchShipData()
  }, [])


  if (isLoading) return <h2>loading ships...</h2>

  return (
    <>
     <div className={styles.shipContainer}>
        {ships.map(ship =>
          <Ship key={ship.name}  ship={ship} />
        )}
      </div>
    </>
  )
}

export default ShipList