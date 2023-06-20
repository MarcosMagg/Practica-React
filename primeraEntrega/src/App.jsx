import Header from "./Componentes/Header/Header"
import Body from "./Componentes/Body/Body"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'/*me permite usar el boostrap de react*/
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"/*permite controlar la navegacion del programa*/
import Nosotros from "./Componentes/Nosotros/Nosotros"
import Contacto from "./Componentes/Contacto/Contacto"
import Error404 from "./Componentes/Error404/Error404"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"

/*Todo esto es un COMPONENTE*/
/*Aqui se modificaria el html*/

function App() {



  return (
    <BrowserRouter>
        <div>
        
          <Header />
          <Body/>
          <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/pokeapi" element={<PokeApi />} />
          {/* <Route path="*" element={ <Navigate to={"/"}/>}/> */}
          <Route path="*" element={ <Error404 />}/>
        </Routes>

        {/* <Footer /> */}
        </div>

      </BrowserRouter>
  )
}

export default App
