import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log(productId)

    useEffect(() => {

        const docRef = doc(db, "products", productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return (<div className="loading">
            <Spinner thickness='3px' speed='0.5s' emptyColor='gray.200' color='#065666' size='xl' />
            <h2>Obteniendo datos...</h2>
        </div>)
    }

    return (
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer