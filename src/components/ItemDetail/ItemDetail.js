import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { NotificationContext } from '../../notification/NotificationService'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, getProductQuantity } = useCart()
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
            {stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} /> : <p className='sinStock'>No hay stock</p>}
        </footer>
    </div>
    )
}

export default ItemDetail

