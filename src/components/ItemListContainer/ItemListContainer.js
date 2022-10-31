import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../services/firebase'

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
      
        const collectionRef = categoryId 
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")
        
        getDocs(collectionRef).then(response => {
        
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()

                return {id: doc.id, ...data}
            })
            
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if (loading) {
        return (<div className="loading">
            <Spinner thickness='3px' speed='0.5s' emptyColor='gray.200' color='#065666' size='xl' />
            <h2>Obteniendo datos...</h2>
        </div>)
    }

    // if(products.length === 0) {
    //     return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    // }

    return (
        <div className="ItemListContainer" onClick={() => console.log('click en itemlistcontainer')}>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
