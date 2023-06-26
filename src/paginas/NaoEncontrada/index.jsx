import {  useNavigate } from 'react-router-dom';
import styles from './NaoEncontrada.module.css'

function NaoEncontrada() {
  const navegar = useNavigate()
  console.log(navegar)
  return (
    <div className={styles.NaoEncontrada}>
          <h1 className={styles.Error}>ERRO</h1>
          <h1 className={styles.titulo}>
              Ops! Página não encontrada.
          </h1>
          <p>
              Tem certeza de que era isso que você estava procurando?
          </p>
     
         

    </div>    
  )
}
export default NaoEncontrada;
