import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ id, img, name, price, }) => {
    return (
        <Card>
            <Image fluid src={img} alt={name} />
            <Card.Body>
                <h3 className="card-title">{name}</h3>
                <p className="card-price">${price}</p>
                <Link to={`/detail/${id}`} className="buttonCard">Ver detalle</Link>
            </Card.Body>
        </Card>
        
    )
}
console.log(Item)

export default Item