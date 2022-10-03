import ItemList from "../ItemList/ItemList"
import { getProducts } from "../ItemList/ItemList"
import { useState , useEffect } from "react"
import "./ItemListContainer.css"
import { Spinner } from '@chakra-ui/react'

const ItemListContainer = ({ Greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return (<div className="loading">
            <Spinner thickness='3px' speed='0.5s' emptyColor='gray.200' color='#065666'size='xl'/>
            <h2>Obteniendo datos...</h2>
            </div>)
    }

    return (
        <div className="ItemListContainer">{Greeting}
        <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer



