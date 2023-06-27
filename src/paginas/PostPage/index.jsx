import { useParams } from "react-router-dom";
import AlunoCard from "../../componentes/AlunosCard";
import posts from "../../json/posts.json";
import NaoEncontrada from "../NaoEncontrada";
import styles from './PostPage.module.css';

function PostPage() {
  const parametros = useParams();
  console.log(parametros);

  const post = posts.find((elemento) => elemento.id === Number(parametros.id));
  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <div>
        <div className={styles.PostPage}>
          <div className={styles.PostTitulo}>
            <h1>{post.titulo}</h1>
            <small>{post.slug}</small>
          </div>
          <div className={styles.PostDescricao}>{post.descricao}</div>
        </div>
<AlunoCard/>
  
      </div>
    </>
  );
}

export default PostPage;
