import './ListaItems.scss'

const ItemListContainer = ({mensaje}) => {

    return(
        <div className="list_container">
            <h2>Lista de Items</h2>
            <hr/>

            <p>{mensaje}</p>
        </div>
    )
}
export default ItemListContainer