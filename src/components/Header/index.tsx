import type React from 'react'
import styles from './styles.module.css'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <ReactLogo width={40} height={40} />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#link1">Products</a>
            </li>
            <li>
              <a href="#link2">Docs</a>
            </li>
            <li>
              <a href="#link3">Support</a>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header
