import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return (
        <div className="card">
            <header>
                <h2 className="card-title">
                    {name}
                </h2>
            </header>
            <img className='card-img' src={img} alt={name} />
            <section>
                <h5 className='card-description'>{description}</h5>
                <p className="card-price">
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </div>
    )
}

export default ItemDetail
