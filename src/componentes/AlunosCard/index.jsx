import {  useParams  } from 'react-router-dom';
import NaoEncontrada from "../../paginas/NaoEncontrada/index";
import styles from './AlunosCard.module.css';
import posts from '../../json/posts.json';


function AlunoCard() {
  const parametros = useParams()
  console.log(parametros)

  const post = posts.find(elemento => elemento.id === Number(parametros.id));  
  if(!post) {
    return (
      <NaoEncontrada />
    )
  }
  return (

 <table>
  <tbody>
   
            <tr className={styles.PostTitulo}>
              <td>
                <p>{post.alunos.nome}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{post.alunos.matricula}</p>
              </td>
            </tr>
            <tr>
              <td className={styles.PostDescricao}>
                {post.alunos.nota}
              </td>
            </tr>
          </tbody>
        </table>


        
  
  )
}

export  default AlunoCard
