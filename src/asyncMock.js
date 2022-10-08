const products =  [
    {   id: '1',
        name: "Camiseta Argentina '86",
        price: 1000,
        category: 'camisetas',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/retro_argenina_1024x1024_85e17b49-6096-4c6d-ae8e-cc1d0bba29cc1-1fc7f6c52de9b7270816264737777382-1024-1024.png',
        stock: 25,
        description: "Camiseta de la Selección Argentina utilizada para el Mundial del año '86, donde salieron campeones"
    },
    {   id: '2',
        name: "Camiseta Italia '86",
        price: 1000,
        category: 'camisetas',
        img: 'https://www.vintagefootballshirts.com/uploads/products/images/1986-90-italy-diadora-home-shi-16718-1.jpg',
        stock: 16,
        description: "Camiseta de la Selección Italiana utilizada para el Mundial del año '86"
    },
    {   id: '3',
        name: "Camiseta Alemania '90",
        price: 1000,
        category: 'camisetas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_970647-MLA50756012504_072022-W.jpg',
        stock: 10,
        description: "Camiseta de la Selección Alemana utilizada para el Mundial del año '90, donde salieron campeones"
    },
    {   id: '4',
        name: "Camiseta Francia '90",
        price: 1000,
        category: 'camisetas',
        img: 'https://assets-es.imgfoot.com/media/cache/800x800/france-home-1990.jpg',
        stock: 10,
        description: "Camiseta de la Selección Francesa utilizada para el Mundial del año '90"
    },
    {   id: '5',
        name: "Camiseta Brasil 2002",
        price: 1000,
        category: 'camisetas',
        img: 'http://cdn.shopify.com/s/files/1/0567/6639/8509/products/Brasil_2002_1200x1200.jpg?v=1644346029',
        stock: 10,
        description: "Camiseta de la Selección Brasilera utilizada para el Mundial del año 2002, donde salieron campeones"
    },
    {   id: '6',
        name: "Camiseta España 2010",
        price: 1000,
        category: 'camisetas',
        img: 'https://e00-marca.uecdn.es/imagenes/2010/03/02/futbol/seleccion/1267525263_extras_noticia_foton_7_0.jpg',
        stock: 10,
        description: "Camiseta de la Selección Española utilizada para el Mundial del año 2010, donde salieron campeones"
    },
    {   id: '7',
        name: "Camiseta Portugal '60",
        price: 1000,
        category: 'camisetas',
        img: 'https://www.retrofootball.es/media/catalog/product/cache/9/image/1300x1300/9df78eab33525d08d6e5fb8d27136e95/p/o/portugal_eusebio.jpg',
        stock: 10,
        description: "Camiseta de la Selección Portuguesa utilizada para el Mundial del año '60"
    },
    {   id: '8',
        name: "Camiseta Inglaterra '90",
        price: 1000,
        category: 'camisetas',
        img: 'https://www.vintagefootballclub.com/wp-content/uploads/2018/06/england-1990-away-1.jpg',
        stock: 10,
        description: "Camiseta de la Selección Inglesa utilizada para el Mundial del año '90"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}