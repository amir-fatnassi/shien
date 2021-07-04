import {useState} from 'react'
import userIcon from './user.png'
import {useDispatch, useSelector} from 'react-redux'
import GoogleLogin from 'react-google-login'
import {Signin, Signup} from '../../redux/userAuthontication/UserAuthList-action'
import { useHistory } from 'react-router-dom'
import * as userauthtype from '../../redux/userAuthontication/UserAuthList-type'

import './Login.css'


const initialState = { name: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const counter = useSelector((state) => state.User)

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (e) => setForm({...form , [e.target.name]: e.target.value})

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    const responseGoogle = (response) => {
        const result = response?.profileObj;
        const token = response?.tokenId
        try {
            dispatch({
                type: userauthtype.USER_LOADED,
                payload: {user: result, token}
            })
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(isSignup){
            dispatch(Signup(form, history))
        }else {
            dispatch(Signin(form, history))
        }        
    }

    return (
        <div className='login-container'>
            <form action="" onSubmit={handleSubmit} className='login-form'>
                <img src={userIcon} alt="user_icon" className='log-icon' />
                <h1>{isSignup  ? 'sign in' : 'sign up' }</h1>
                {isSignup  && (<div className='sign'>
                        <input
                            type="text" 
                            name='name'
                            onChange={handleChange}
                            className='input-box-sign'
                            placeholder='Name'
                        />
                        <input
                            type="text" 
                            name='lastName'
                            onChange={handleChange}
                            className='input-box-sign'
                            placeholder='Last Name'
                        />
                    </div>
                )}
                <input 
                    type="email" 
                    name='email'
                    onChange={handleChange}
                    className='input-box'
                    placeholder='Email'
                />
                <input 
                    type="password" 
                    name='password'
                    onChange={handleChange}
                    className='input-box'
                    placeholder='Password' 
                />
                {isSignup  && <input 
                    type="password" 
                    name='confirmPassword'
                    onChange={handleChange} 
                    className='input-box'
                    placeholder='confirm Password' 
                />}
                <div className='error'>{counter.err}</div>
                <input type="submit" value='Se Connecter' className='input-button' />
                <hr />
                <p className="OR">OR</p>
                <GoogleLogin
                    clientId="405627064934-fpksc2tf4kvco2gdfj01n0ou1nevvfk8.apps.googleusercontent.com"
                    render={renderProps => (
                    <input type="submit" value='login with google' className='input-button' onClick={renderProps.onClick} disabled={renderProps.disabled} />
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <h5 onClick={switchMode}>
                    { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </h5>
            </form>
        </div>
    )
}

export default Login

