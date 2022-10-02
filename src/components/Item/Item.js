import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import "./Item.css"

const Item = ({ img, name, price }) => {
    return (
            <Card className="card">
                <Image fluid src={img} alt={name}/>
                <Card.Body>
                    <h3 className="card-title">{name}</h3>
                    <p className="card-price">${price}</p>
                    <Button variant="success">Añadir al carrito</Button>
                </Card.Body>
            </Card>
    )
}

export default Item