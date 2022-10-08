import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price }) => {

    return (
        <div className="card">
            <header>
                <h2 className="card-title">
                    {name}
                </h2>
            </header>
                <img className='card-img' src={img} alt={name}/>
            <section>
                <p className="card-price">
                    Precio: ${price}
                </p>
            </section>           
            <footer>
               <Link to={`/detail/${id}`} className='buttonCard'>Ver detalle</Link>
            </footer>
        </div>
    )
}

export default Item