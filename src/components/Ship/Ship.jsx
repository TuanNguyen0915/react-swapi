import { Link } from 'react-router-dom'
import styles from './Ship.module.css'


const Ship = ({ ship }) => {
  return (
    <div className={styles.shipContainer}>
        <h2>{ship.name}</h2>
    </div>
  )
}

export default Ship
