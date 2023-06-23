import { Link } from 'react-router-dom'
import styles from './PostLink.module.css'


export default function PostLink(props) {
    return (
        <Link to={`${'/posts/' + props.post.id}`}>
        <div className={styles.post}>
            <div className={styles.id}>
                {props.post.id}
            </div>
            <div className={styles.container}>
                <span className={styles.titulo}>{props.post.titulo}</span>
                <span className={styles.slug}>{props.post.slug}</span>
            </div>            
        </div>
        </Link>
    )
  }
  