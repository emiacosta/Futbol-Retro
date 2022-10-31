import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart, getProductQuantity } = useCart()//useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id,
            name,
            price
        }

        addItem(productToAdd, quantity)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    const quantityAdded = getProductQuantity(id)

    return (<div className="card">
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
        <footer className='ItemFooter'>
            {stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} /> : <p>No hay stock</p>}
            {
                // !isInCart(id) 
                //? 
                // : <Link to='/cart' className='Option'>Finalizar compra</Link>
                isInCart(id) && <Link to='/cart' className='Option' style={{ backgroundColor: 'blue' }}>Finalizar compra</Link>
            }

        </footer>
    </div>
    )
}

export default ItemDetail

