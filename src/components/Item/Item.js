import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Button } from '@chakra-ui/react'
import "./Item.css"

const Item = ({ img, name, price }) => {
    return (
        <Card>
            <Image fluid src={img} alt={name} />
            <Card.Body>
                <h3 className="card-title">{name}</h3>
                <p className="card-price">${price}</p>
                    <Button direction='row' pacing={4} colorScheme='teal' variant='solid' align='center'>
                        Ver detalles
                    </Button>
            </Card.Body>
        </Card>
    )
}

export default Item