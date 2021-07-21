import {Link} from 'react-router-dom'
import './CardItem.css'

const CardItem = ( {prod, path} ) => {
    return (
        <div className='card-item-container'> 
        {/* <Link  to={`/search-${path ? path : window.location.pathname.split('/')[1]}`} > */}
        <Link  to={`/${path ? path :`search-${window.location.pathname.split('/')[1]}`}`} >
            <div className="card-item-img">
                <img src={`http://localhost:5000/public/data/uploads/${prod.imageProduct}`} alt="" className="item-img"/>
            </div>
            <div className="card-item-info">
                <p className="card-item-title"> 
                {prod.name}</p>
                <h3 className="price"> {prod.price} $</h3>
            </div>
        </Link>
        </div>
    )
}

export default CardItem
