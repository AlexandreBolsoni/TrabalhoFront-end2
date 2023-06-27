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
      {post.alunos.map((aluno) => (
        <tr key={aluno.matricula}>
          <td>
            <p>Nome: {aluno.nome}</p>
          </td>
          <td>
            <p>Matrícula: {aluno.matricula}</p>
          </td>
          <td>
            <p>Nota: {aluno.nota}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
  )
}

export  default AlunoCard
