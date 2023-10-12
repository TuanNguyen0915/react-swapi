import { Link } from 'react-router-dom'
import styles from './Ship.module.css'


const Ship = ({ ship }) => {
  return (
    <div className={styles.shipContainer}>
      <h2>{ship.name}</h2>
      <Link to='/ships/details' state={{ship}}><button>Details</button></Link>
    </div>
  )
}

export default Ship
