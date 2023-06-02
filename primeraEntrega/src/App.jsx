import Header from "./Componentes/Header/Header"
import ItemListContainer from "./Componentes/ListaItems/ListaItems"
import Body from "./Componentes/Body/Body"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap" /*permite importar de boostarp react*/
import  './App.css'

/*Todo esto es un COMPONENTE*/
/*Aqui se modificaria el html*/

function App() {

  const clickear = () => console.log("Buena Correccion xD")

  return (
      <div>
        <Header />
        <Body/>
        <ItemListContainer mensaje="Hola mundo"/>

        <div className="container">
          <Button onClick={clickear} variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
        </div>

      </div>
  )
}

export default App
