import Ship from "../Ship/Ship"
import styles from './ShipsList.module.css'
import { Link } from "react-router-dom"
const ShipsList = ({ ships }) => {
  return (
    <div className={styles.shipsList}>
      {ships.map(ship =>
        <Link key={ship.name} to='/ship-details' state={ship}>
          <div className={styles.shipCard}>
            <Ship ship={ship} />
          </div>
        </Link>
      )}
    </div>
  )
}

export default ShipsList