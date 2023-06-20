import { Link } from "react-router-dom"
import './Itemcard.scss'


// const ItemCard = ({item}) => {
const ItemCard = ({id, nombre, precio, descripcion, img}) => {

    return (
        
            <div className='col-3 m-2'>
            <div className="itemCard">
                    <h4>{nombre}</h4>
                    <img src={img} alt={nombre}/>
                    <p>{descripcion}</p>
                    <p>Precio: ${precio}</p>
                    <Link className="btn btn-primary" to={`/detail/${id}`}>Ver más</Link>
            </div>
        </div>
        
    )
}

export default ItemCard