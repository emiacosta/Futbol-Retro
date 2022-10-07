import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({ products }) => {
    return (
        <div className="listaItems">
            {products.map(prod =>
                <Item key={prod.id} img={prod.img} name={prod.name} price={prod.price} />)}
        </div>
    )
}

export default ItemList