import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext} from '../../notification/NotificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import "./checkout.css"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const [name, setName] = useState ('');
    const [tel, setTel] = useState ('');
    const [email, setEmail] = useState ('');
    const MySwal = withReactContent(Swal)

    const navigate = useNavigate()

    const crearOrden = async () => {
        setLoading(true)

        try {
            const objOrden = {
                buyer: { name, tel, email },
                items: cart,
                total: total
            }
            
            const batch = writeBatch(db)
            const fueraDeStock = []
            const ids = cart.map(prod => prod.id)
            const productoRef = collection(db, 'products')
            const productosAgregadosDeFirestore = await getDocs(query(productoRef, where(documentId(), 'in', ids)))
            const { docs } = productosAgregadosDeFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productoAgregadoAlCarrito = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productoAgregadoAlCarrito?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    fueraDeStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(fueraDeStock.length === 0) {
                await batch.commit()
                const ordenRef = collection(db, 'orders')
                const ordenAñadida = await addDoc(ordenRef, objOrden)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)
                setNotification(
                MySwal.fire({
                    title: <strong>¡Excelente!</strong>,
                    html: <i>`Tu compra fue realizada con éxito. El ID de su orden es: ${ordenAñadida.id}`</i>,
                    icon: 'success',
                    timer: 2000
                  }));
            } else {
               setNotification('error','Hay productos que estan fuera de stock.')
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
        <form className="formulario">
            <input value={name} required type="text" name="name" placeholder="Ingresá tu nombre completo"  onChange={(e)=> setName  (e.target.value)}/>
            <input value={email} required type="email" name="email" placeholder="Ingresá tu email" onChange={(e)=> setEmail  (e.target.value)}/>
            <input value={tel} required type="number" name="tel" placeholder="Ingresá tu teléfono" onChange={(e)=> setTel  (e.target.value)}/>
            <button type="submit" onClick={crearOrden} className="generarOrden">Generar orden</button>
        </form>
    )
}

export default Checkout