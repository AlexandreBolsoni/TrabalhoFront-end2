
// import { Link } from 'react-router-dom'
import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

export default function Menu() {

    return (
        <header>
        <nav className={styles.menu}>
            <div className={styles.menu_logo} > &lt;/&gt; REACT &lt;/&gt;</div>
            <ul>
                <li>
                    <MenuLink to='/'>Matérias</MenuLink>
                </li>
                <li>
                    <MenuLink to='/sobremim'>Sobre Mim</MenuLink>
                </li>
                <li>
                    <MenuLink to='/home'>Home</MenuLink>
                </li>
                
            </ul>            
        </nav>
    </header>  
    )
  }
  