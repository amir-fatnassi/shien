import * as userauthtype from './UserAuthList-type';

import * as api from '../../api/index';

export const Signin = (user, history) => async(dispatch) => {
    try {
        dispatch({type: userauthtype.USER_LOADING})

        const currentUser = await api.getUser(user)

        console.log(currentUser.data.data)
        console.log(currentUser.data.token)

        dispatch({
            type: userauthtype.USER_LOADED, 
            payload:{
                user: currentUser.data.data.user ,
                token:  currentUser.data.token
            }
        });
        history.push('/')
    } catch (error) {
        dispatch({type:userauthtype.AUTH_ERROR})
        console.log(error)
        dispatch({
            type: userauthtype.GET_ERRORS,
            payload: error.response.data.message
        })
        setTimeout(() => { dispatch({type: userauthtype.CLEAR_ERRORS})}, 5000)
    }
}

export const Signup = (user, history) => async(dispatch) => {
    try {
        dispatch({type: userauthtype.USER_LOADING})

        const newUser = await api.createUser(user)

        console.log(newUser.data.data)
        console.log(newUser.data.token)

        dispatch({
            type: userauthtype.REGISTER_SUCCESS, 
            payload:{
                user: newUser.data.data.user ,
                token:  newUser.data.token
            }
        });
        history.push('/')
    } catch (error) {
        dispatch({type:userauthtype.REGISTER_FAIL})
        console.log(error)
        dispatch({
            type: userauthtype.GET_ERRORS,
            payload: error.response.data.message
        })
        setTimeout(() => { dispatch({type: userauthtype.CLEAR_ERRORS})}, 5000)
    }
}
