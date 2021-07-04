import React from 'react'
import './ProductDetail.css';
import Button from '../Button/Button'

const ProductDetail = () => {
    return (
        <div className='product-detail-component'>
            <div className="product-detail-head">
                <h3 className="product-name">product name</h3>
                <h2 className="product-price">2,99€</h2>
            </div>
            <div className="product-taille">
                <h2 className="taille">Taille</h2>
                <ul className="taille-list">
                    <li className="item-taille">S</li>
                    <li className="item-taille">M</li>
                    <li className="item-taille">L</li>
                    <li className="item-taille">XL</li>
                    <li className="item-taille">XXL</li>
                </ul>
            </div>
            <Button buttonStyle='btn--primary' buttonSize='btn--large'>AJOUTER AU PANIER</Button>
        </div>
    )
}

export default ProductDetail
