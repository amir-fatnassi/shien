import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Incr, Dicr, removeToCart} from '../../../../redux/shopping/shopping-action'
import './TableCartItem.css' 

function TableCartItem({ cart }) {

    const dispatch = useDispatch()

    const [totpric, setTotpric] = useState(cart.totqty)   

    useEffect(() => {
        setTotpric(cart.price * cart.qty);
    }, [cart]) 
    return (
        <tr>
            <td id='art'>
                <div className="article">
                    <div className='image-cart-table'>  
                        <img  src={`http://localhost:5000/public/data/uploads/${cart.imageProduct}`} alt=""  />
                    </div>
                    <div className="cart-table-detail">
                        <h5>{cart.name}</h5>
                        <div className="lick-dislick">
                            <ul>
                                <li><i class="fas fa-thumbs-up"></i></li>
                                <li><i class="fas fa-trash-alt" onClick={()=> dispatch(removeToCart(cart._id))} ></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
            <td> {cart.price} $ </td>
            <td>
                <div className="qty">
                    <ul>
                        <li><button className='btn1' onClick={()=> dispatch(Dicr(cart._id))} > - </button></li>
                        <li>
                            <input className='qty-inp' type="text"  value={cart.qty} />
                        </li>
                        <li><button className='btn-' onClick={()=> dispatch(Incr(cart._id))}> + </button></li>
                    </ul>
                </div>
            </td>
            <td >{totpric} $ </td>
        </tr>
    )
}

export default TableCartItem
