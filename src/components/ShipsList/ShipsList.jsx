import Ship from "../Ship/Ship"
import styles from './ShipsList.module.css'

const ShipsList = ({ ships }) => {
  return (
    <div className={styles.shipsList}>
      {ships.map(ship =>
        <div key={ship.name} className={styles.shipCard}>
          <Ship  ship={ship} />
        </div>
      )}
    </div>
  )
}

export default ShipsList