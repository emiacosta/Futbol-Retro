import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
// import { addDoc, collection } from 'firebase/firestore'
import { NotificationContext} from '../../notification/NotificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import "./checkout.css"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const MySwal = withReactContent(Swal)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: 'Emiliano Acosta',
                    phone: '123456',
                    mail: 'contacto@emiacosta.com'
                },
                items: cart,
                total: total
            }
            
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)
                setNotification(
                MySwal.fire({
                    title: <strong>¡Excelente!</strong>,
                    html: <i>`Tu compra fue realizada con éxito. El ID de su orden es: ${orderAdded.id}`</i>,
                    icon: 'success',
                    timer: 2000
                  }));
            } else {
               setNotification('error','Hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1 className="generandoOrden">Se está generando su orden...</h1>
    }

    return (
        <div>
            <h1 className="checkoutTitle">Checkout</h1>
            <button onClick={createOrder} className="generarOrden">Generar orden</button>
        </div>
    )
}

export default Checkout