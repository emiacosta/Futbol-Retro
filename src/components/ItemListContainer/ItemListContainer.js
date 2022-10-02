import ItemList from "../ItemList/ItemList"
import { getProducts } from "../ItemList/ItemList"
import { useState , useEffect } from "react"
import "./ItemListContainer.css"

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
        return <h1>Loading...</h1>
    }

    return (
        <div className="ItemListContainer">{Greeting}
        <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer



