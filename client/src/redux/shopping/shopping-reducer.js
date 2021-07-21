import * as actionType from './shopping-type';

const initialState = {
    products: [],
    productHomme: [],
    productFemme: [],
    cart: [],
    currentItem: null
}

const shopReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_PRODUCTSHF:
            return{
                ...state,
                productHomme: action.payload.homme,
                productFemme: action.payload.femme
            }
        case actionType.GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case actionType.DELET_PRODUCT:
            return {
                ...state,
                products: state.products.filter((el) => el._id !== action.payload )
            }
        case actionType.ADD_NEW_PRODUCT:
        case actionType.UPDATE_PRODUCT:  
            return{
                ...state
            }
        case actionType.ADD_TO_CART:
            const item = state.products.find((product) => product._id === action.payload.id);
            const inCart = state.cart.find((item) => item._id === action.payload.id ? true :false);
            
            return {
                ...state,
                cart: inCart ? 
                state.cart.map((item) => item._id === action.payload.id ? 
                {...item, qty:item.qty + 1, totqty: (item?.price * (item?.qty + 1) )} : item ): 
                [...state?.cart , { ...item , qty:1, totqty: item?.price },]
            }
        case actionType.REMOVE_TO_CART:
            return {
                ...state,
                cart : state.cart.filter(item => item._id !== action.payload.id)
            }
        case actionType.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.id ? {...item, qty: action.payload.qty} : item )
            }
        case actionType.INCREMENT:
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.id ? {...item, qty: item.qty + 1 , totqty: item.totqty + item.price} : item )
            }
        case actionType.DICREMENT:
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.id ? 
                    {...item, 
                        qty: item.qty > 0 ? (item.qty - 1) : item.qty, 
                        totqty: item.qty > 0 ? (item.totqty - item.price) : item.totqty 
                    } :
                    item )
            }
        case actionType.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        case actionType.CLEAR_PRODUCT:
            return{
                ...state,
                products: []
            }
        case actionType.CLEAR_CARTS:
            return{
                ...state,
                cart: []
            }
        default:
            return state 
    }
}

export default shopReducer