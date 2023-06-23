
import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink(props) {
    const localizacao = useLocation();
    return (
            <Link to={props.to} className={`
            ${localizacao.pathname === props.to ? styles.link_ativo : styles.link}
            `}
            >{props.children}</Link>      
    )
  }
  