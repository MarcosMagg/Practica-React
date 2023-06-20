import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalle from "../SelectTalle/SelectTalle"
import { Link, useNavigate } from "react-router-dom"



const talles = [
    {
        value: "XS",
        label: "Extra Small"
    },
    {
        value: "M",
        label: "Medium"
    },
    {
        value: "XL",
        label: "Extra Large"
    },
]

const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, 
            nombre, 
            precio, 
            category, 
            descripcion, 
            img, 
            stock, 
            cantidad, 
            talle
        }
        console.log(item)
    }

    
    const handleVolver = () => {
        navigate(-1)
    }


    return (
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br/>
            <small>categoría: {category}</small>

            <SelectTalle 
                setSelect={setTalle}
                opciones={talles}
            />

            <ItemCount 
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />

            <hr/>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail