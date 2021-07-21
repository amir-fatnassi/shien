import React from 'react';
import './ShowProduct.css'

const ShowProduct = ({ product }) => {
    console.log(product)
    return (
        <div className='show-container'>
            <div className='show-image'>
                <img src={`http://localhost:5000/public/data/uploads/${product.imageProduct}`} alt="" />
            </div>
            <h4> {product.name} </h4>
            <p>{product.qty}</p>
            <p>{product.totqty}</p>
        </div>
    )
}

export default ShowProduct
