import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AlunosCard.module.css';

export default function AlunoLink(props) {
  const cursos = props.cursos; // vetor de cursos

  // Reduz os cursos para obter o vetor de alunos
  const alunos = cursos.reduce((alunosArray, curso) => {
    return alunosArray.concat(curso.alunos);
  }, []);

  return (
    <div>
      {alunos.map(aluno => (
        <Link to={`/alunos/${aluno.matricula}`} key={aluno.matricula}>
          <div className={styles.AlunoCard}>
            <div className={styles.nome}>
              {aluno.nome}
            </div>
            <div className={styles.container}>
              <span className={styles.titulo}>{aluno.matricula}</span>
              <span className={styles.slug}>{aluno.notas[0]}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
