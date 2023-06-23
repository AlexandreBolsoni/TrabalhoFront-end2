import { useParams } from "react-router-dom";
// import Post from "../../componentes/PostLink";
// import VideoCard from "../../componentes/VideoCard";
import posts from "../../json/posts.json"
import NaoEncontrada from "../NaoEncontrada";
import styles from './PostPage.module.css'

function PostPage() {
  const parametros = useParams()
  console.log(parametros)

  const post = posts.find(elemento => elemento.id === Number(parametros.id));  
  if(!post) {
    return (
      <NaoEncontrada />
    )
  }
  return (
  <>
        <div className={styles.PostPage}>
          <div className={styles.PostTitulo}>
              <h1>{post.titulo}</h1>
              <small>{post.slug}</small>
          </div>            
          <div className={styles.PostDescricao}>
            {post.descricao}
          </div>
        </div>    
    </>
  )
}

export default PostPage;
