import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import styles from '../modulesCss/nav.module.css'


export const Nav = ({ onSearch }) => {
  return (
    <div className={styles.navCont}>
    <div>
        <Link to="/">
          <button className={styles.navButt} >Home</button>
        </Link>
        <Link to="/about">
          <button className={styles.navButt} >About</button>
        </Link>
    </div>
      
      
      
          <SearchBar onSearch={ onSearch } />
    </div>
    

  )
}
