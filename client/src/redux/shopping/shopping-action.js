import * as actionType from './shopping-type';
import * as api from '../../api/index';


export const getProducts = () => async(dispatch) => {
    try {
        const {data} = await api.getProduct();
        dispatch({
            type: actionType.GET_PRODUCTS,
            payload: data.data.products
        })

    } catch (error) {
        console.log(error.response)
    }
}

export const UpdateProduct = (id, data, history) => async(dispatch) => {
    try {
        await api.updProduct(id, data)
        dispatch({
            type: actionType.UPDATE_PRODUCT
        })
        history.push('/search')
    } catch (error) {
        console.log(error.response)
    }
}

export const AddProduct = ( product, history) => async(dispatch) =>{ 
    try {
        await api.addProduct(product)
        dispatch({
            type: actionType.ADD_NEW_PRODUCT
        })
        history.push('/search')
    } catch (error) {
        console.log(error.response)
    }
}

export const DeleteProduct = (id) => async(dispatch) => {
    try {
        await api.deleteProduct(id)
        dispatch({
            type:actionType.DELET_PRODUCT,
            payload:id
        })
    } catch (error) {
        console.log(error.response)
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