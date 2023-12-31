import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Menu from "./componentes/Menu";
// import PostLink from "./componentes/PostLink";
import Inicio from "./paginas/Materias"
import NaoEncontrada from "./paginas/NaoEncontrada";
import PostPage from "./paginas/PostPage";
import SobreMim from "./paginas/SobreMim"
import styles from "./App.module.css"
// import MyApp from "./paginas/_app";

export default function App() {

  return (
    <div className={styles.App}>
      <BrowserRouter>   
      <Menu />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />
          <Route path='*' element={<NaoEncontrada />}/>
          <Route path="/posts/:id" element={<PostPage />}  />        
          {/* <Route path="../src/paginas/_app.js" element={<MyApp/>}  />         */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
