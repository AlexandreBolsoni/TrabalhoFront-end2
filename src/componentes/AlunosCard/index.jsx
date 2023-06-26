import {  useParams  } from 'react-router-dom';
import NaoEncontrada from "../../paginas/NaoEncontrada/index";
import styles from './AlunosCard.module.css';
import posts from '../../json/posts.json';


function AlunoCard() {
  const parametros = useParams()
  console.log(parametros)




  const curso = posts.find(elemento => elemento.id === Number(parametros.id));  
  if(!curso) {
    return (
      <NaoEncontrada />
    )
  }
  return (

 <table>
  <tbody>
   
            <tr className={styles.PostTitulo}>
              <td>
                <p>{curso.nome}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{curso.matricula}</p>
              </td>
            </tr>
            <tr>
              <td className={styles.PostDescricao}>
                {curso.notas}
              </td>
            </tr>
          </tbody>
        </table>


        
  
  )
}

export  default AlunoCard
