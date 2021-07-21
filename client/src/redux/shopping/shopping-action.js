import * as actionType from './shopping-type';
import * as api from '../../api/index';


export const viewProduct = () => async(dispatch) => {
    try {
            const homme = await api.getProduct('homme');
            const femme = await api.getProduct('femme');
            console.log(homme.data.data.products)
            console.log(femme.data.data.products)
            dispatch({
                type: actionType.GET_PRODUCTSHF,
                payload: {
                    homme:homme.data.data.products,
                    femme:femme.data.data.products,
                }
            })
    
        } catch (error) { 
            console.log(error)
        }
    }

export const getProducts = (path) => async(dispatch) => {
try {
        const {data} = await api.getProduct(path);
        dispatch({
            type: actionType.GET_PRODUCTS,
            payload: data.data.products
        })

    } catch (error) {  
        dispatch({
            type:actionType.CLEAR_PRODUCT
        })
        console.log(error.response)
    }
}

export const UpdateProduct = (id, data, history, path) => async(dispatch) => {
    
    try {
        await api.updProduct(id, data, path)
        dispatch({
            type: actionType.UPDATE_PRODUCT
        })
        history.push(`/search-${path}`)
    } catch (error) {
        console.log(error.response)
    }
}

export const AddProduct = ( product, history, path) => async(dispatch) =>{ 
    try {
        await api.addProduct(product, path)
        dispatch({
            type: actionType.ADD_NEW_PRODUCT
        })
        history.push(`/search-${path}`)
    } catch (error) {
        console.log(error.response)
    }
}

export const DeleteProduct = (id, path) => async(dispatch) => {
    try {
        await api.deleteProduct(id, path)
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

export const ClearCart = (history) => async(dispatch) => {
    dispatch({
        type: actionType.CLEAR_CARTS
    }) 
    history.push('/search-femme')
    
}