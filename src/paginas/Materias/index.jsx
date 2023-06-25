import { useParams } from "react-router-dom";
import ListaDePosts from "../../componentes/ListaDePosts";


function Inicio() {
  const parametros = useParams()
  console.log(parametros)
  
  return (
    <div>
      <ListaDePosts />
    </div>    
  )
}

export default Inicio;
