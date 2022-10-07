import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

const ItemDetail = ({ id, name, img, price, stock }) => {
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return (
        <Card>
            <Image fluid src={img} alt={name} />
            <Card.Body>
                <h3 className="card-title">{name}</h3>
                <p className="card-price">${price}</p>
                <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail