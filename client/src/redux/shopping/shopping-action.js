import * as actionType from './shopping-type';
import * as api from '../../api/index';


export const getProducts = () => async(dispatch) => {
    try {
        const {data} = await api.getProduct();
        console.log(data.data.products)
        dispatch({
            type: actionType.GET_PRODUCTS,
            payload: data.data.products
        })

    } catch (error) {
        console.log(error.error)
    }
}

export const addToCart = (itemID) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeToCart = (itemID) => {
    return {
        type: actionType.REMOVE_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const addJustQTY = (itemID, value) => {
    return {
        type: actionType.ADJUST_QTY,
        payload: {
            id: itemID,
            qty:value
        }
    }
}

export const Incr = (itemID) => {
    return {
        type: actionType.INCREMENT,
        payload: {
            id: itemID
        }
    }
}

export const Dicr = (itemID) => {
    return {
        type: actionType.DICREMENT,
        payload: {
            id: itemID
        }
    }
}

export const loadCurrentItem = (itemID) => {
    return {
        type: actionType.LOAD_CURRENT_ITEM,
        payload: itemID
    }
}