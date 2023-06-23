import { Link } from 'react-router-dom';
import styles from './VideoCard.module.css';

export default function VideoCard({ video }) {
    return (
        <Link to={`/video/${video.id}`}>
            <div className={styles.VideoCard}>
                <img
                    className={styles.capa}
                    src={video.thumbnail}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{video.titulo}</h2>               
            </div>
        </Link>
    )
}