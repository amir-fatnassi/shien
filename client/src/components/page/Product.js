import React from 'react'
import ProductImage from '../element_component/ProductImage/ProductImage'
import ProductDetail from '../element_component/ProductDetails/ProductDetail'

const Product = () => {
    return (
        <div className='product-page-component'>
            <ProductImage/> 
            <ProductDetail/>
        </div>
    )
}

export default Product
