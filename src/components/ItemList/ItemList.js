import Item from "../Item/Item"
import "./ItemList.css"

const products = [
    {   id: '1',
        name: "Camiseta Argentina '86",
        price: 1000,
        category: 'camiseta',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/retro_argenina_1024x1024_85e17b49-6096-4c6d-ae8e-cc1d0bba29cc1-1fc7f6c52de9b7270816264737777382-1024-1024.png',
        stock: 25,
        description: "Camiseta de la Selección Argentina del año '86"
    },
    {   id: '2',
        name: "Camiseta Italia '86",
        price: 1000,
        category: 'camiseta',
        img: 'https://www.vintagefootballshirts.com/uploads/products/images/1986-90-italy-diadora-home-shi-16718-1.jpg',
        stock: 16,
        description: "Camiseta de la Selección Italiana del año '86"
    },
    {   id: '3',
        name: "Camiseta Alemania '90",
        price: 1000,
        category: 'camiseta',
        img: 'https://http2.mlstatic.com/D_NQ_NP_970647-MLA50756012504_072022-W.jpg',
        stock: 10,
        description: "Camiseta Alemania '90"
    },
    {   id: '4',
        name: "Camiseta Francia '90",
        price: 1000,
        category: 'camiseta',
        img: 'https://assets-es.imgfoot.com/media/cache/800x800/france-home-1990.jpg',
        stock: 10,
        description: "Camiseta Francia '90"
    },
    {   id: '5',
        name: "Camiseta Brasil 2002",
        price: 1000,
        category: 'camiseta',
        img: 'http://cdn.shopify.com/s/files/1/0567/6639/8509/products/Brasil_2002_1200x1200.jpg?v=1644346029',
        stock: 10,
        description: "Camiseta Brasil 2002"
    },
    {   id: '6',
        name: "Camiseta España 2010",
        price: 1000,
        category: 'camiseta',
        img: 'https://e00-marca.uecdn.es/imagenes/2010/03/02/futbol/seleccion/1267525263_extras_noticia_foton_7_0.jpg',
        stock: 10,
        description: "Camiseta España 2010"
    },
    {   id: '7',
        name: "Camiseta Portugal '60",
        price: 1000,
        category: 'camiseta',
        img: 'https://www.retrofootball.es/media/catalog/product/cache/9/image/1300x1300/9df78eab33525d08d6e5fb8d27136e95/p/o/portugal_eusebio.jpg',
        stock: 10,
        description: "Camiseta Portugal '60"
    },
    {   id: '8',
        name: "Camiseta Inglaterra '90",
        price: 1000,
        category: 'camiseta',
        img: 'https://www.vintagefootballclub.com/wp-content/uploads/2018/06/england-1990-away-1.jpg',
        stock: 10,
        description: "Camiseta Inglaterra '90"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

const ItemList = ({ products }) => {
    return (
        <div className="listaItems">
            {products.map(prod =>
                <Item key={prod.id} img={prod.img} name={prod.name} price={prod.price} />)}
        </div>
    )
}

export default ItemList