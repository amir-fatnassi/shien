import {Link} from 'react-router-dom'
import './CardItem.css'

const CardItem = ( {image} ) => {
    return (
        <div className='card-item-container'>
            <div className="card-item-img">
                <img src={image} alt="" className="item-img"/>
            </div>
            <div className="card-item-info">
                <h1 className="card-item-title"> 
                <Link  to='/search' >title card</Link></h1>
                <h6 className="price"> price card</h6>
            </div>
        </div>
    )
}

export default CardItem
