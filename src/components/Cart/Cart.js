import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1 className='sinItems'>No hay items en el carrito.</h1>
        )
    }

    return (     
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='totalCart'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button cleanCart">Limpiar carrito</button>
            <Link to='/checkout' className='checkoutTitle'>Checkout</Link>
        </div>
    )
}

export default Cart