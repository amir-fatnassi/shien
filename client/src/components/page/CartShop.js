import React from 'react';
import { connect } from 'react-redux'
import TableCart from '../element_component/CartShop/TableCart/TableCart'
import PrixTotal from '../element_component/CartShop/PrixTotal/PrixTotal'
import '../../App.css'

function CartShop( {cart} ) {
    return (
        <div className='cart-shop'>
            <TableCart carts={cart} />
            <PrixTotal carts={cart} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps)(CartShop)
