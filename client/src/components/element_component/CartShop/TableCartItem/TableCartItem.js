import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {Incr, Dicr, removeToCart} from '../../../../redux/shopping/shopping-action'
import './TableCartItem.css' 

function TableCartItem({ cart, Incr, Dicr, removeToCart }) {

    const [totpric, setTotpric] = useState(cart.totqty)

    useEffect(() => {
        setTotpric( cart.price * cart.qty);
    }, [cart.qty]) 
    return (
        <tr>
            <td id='art'>
                <div className="article">
                    <div className='image-cart-table'>
                        <img  src={cart.image} alt=""  />
                    </div>
                    <div className="cart-table-detail">
                        <h5>{cart.title}</h5>
                        <div className="lick-dislick">
                            <ul>
                                <li><i class="fas fa-thumbs-up"></i></li>
                                <li><i class="fas fa-trash-alt" onClick={()=> removeToCart(cart.id)} ></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
            <td> {cart.price} $ </td>
            <td>
                <div className="qty">
                    <ul>
                        <li><button className='btn1' onClick={()=> Dicr(cart.id)} > - </button></li>
                        <li>
                            <input className='qty-inp' type="text"  value={cart.qty} />
                        </li>
                        <li><button className='btn-' onClick={()=> Incr(cart.id)}> + </button></li>
                    </ul>
                </div>
            </td>
            <td >{totpric} $ </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        Incr: (id) => dispatch(Incr(id)),
        Dicr: (id) => dispatch(Dicr(id)),
        removeToCart: (id) => dispatch(removeToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(TableCartItem)
