import React from 'react'
import './SearchBody.css'
import CardSearch from '../CardSearch/CardSearch'
import { connect } from 'react-redux'

const SearchBody = ({products}) => {
    return (
        <div className='search-body-container'>
            {products.map((product) => {
                return(
                <CardSearch key={product.id} product={product} />
            )})}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(SearchBody)
