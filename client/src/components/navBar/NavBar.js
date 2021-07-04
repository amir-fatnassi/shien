
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory, useLocation} from 'react-router-dom'
import { connect } from 'react-redux'
import imag from '../page/user.png'
import './NavBar.css'

import * as userauthtype from '../../redux/userAuthontication/UserAuthList-type'


const NavBar = ( {cart} ) => {

    const [cartCount, setCartCount] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profil')))

    const curentUse = useSelector((state) => state.User)

    const history = useHistory()
    const location = useLocation()

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch({
            type: userauthtype.LOGOUT_SUCCESS
        })
        history.push('/')
    }


    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty
        });

        setCartCount(count)

        setUser(JSON.parse(localStorage.getItem('profil')))

    }, [cart, cartCount, location, curentUse])

    return (
        <div className='nav-bar'>
            <ul className="nav-menu">
                <li>
                    <Link className='nav-link acvtive' to='/' >FEMME</Link> 
                </li>
                <li><Link className='nav-link' to='/homme' >HOMME</Link></li>
                <li><Link className='nav-link' to='/search'>Enfants</Link></li>
                <li><Link className='nav-link' to='/product'>Beaute</Link></li>
            </ul>
            <div className="logo">SHEN</div>
            <ul className="nav-menu nav-icon">
                {user ? ( <div className="user-place">
                    <img src={user && (user?.user.imageUrl || imag)} alt="" />
                    <p>{user?.user.familyName || user?.user.name}</p>
                </div> ): (
                    <li><Link to='/login'><i className="fas fa-user"></i></Link></li>
                )}
                <li> <Link to='/cart'><i className="fas fa-shopping-cart"></i> {cartCount} </Link></li>
                <li><i className="fas fa-headset"></i></li>
                <li><i className="fas fa-globe"></i></li>
                {user && ( <li><i class="fas fa-sign-out-alt" onClick={logOut}></i></li> )}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(NavBar)

