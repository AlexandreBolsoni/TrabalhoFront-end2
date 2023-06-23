import {  useNavigate } from 'react-router-dom';
import styles from './NaoEncontrada.module.css'

function NaoEncontrada() {
  const navegar = useNavigate()
  console.log(navegar)
  return (
    <div className={styles.NaoEncontrada}>
          <h1 className={styles.Error}>404</h1>
          <h1 className={styles.titulo}>
              Ops! Página não encontrada.
          </h1>
          <p>
              Tem certeza de que era isso que você estava procurando?
          </p>
          <p>
              Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
          </p>      
           
         

    </div>    
  )
}
export default NaoEncontrada;
