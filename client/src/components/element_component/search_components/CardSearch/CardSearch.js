import React from 'react'
import {Link} from 'react-router-dom'
import './CardSearch.css';
import { connect } from 'react-redux';
import { addToCart } from '../../../../redux/shopping/shopping-action'

const CardSearch = ({product, addToCart}) => {
    return (
        <div className='card-search-container'>
            <div className="card-search-image">
                <img src={product.image} alt="" />
            </div>
            <div className="card-search-body">
                <h5 className="card-search-descreption">{product.description}</h5>
                <div className="price-heart">
                    <h5 className="price">$ {product.price}</h5>
                    <i className="far fa-heart"></i>
                </div>
                <h6>
                <Link  to='/product' >View More</Link>
                </h6>
                {/* <div className="color"></div> */}
            </div>
            <button className='btn add' onClick={()=> addToCart(product.id)} >add</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(CardSearch)
