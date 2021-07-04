import * as actionType from './shopping-type';

const initialState = {
    products: [
        {
            id: 1,
            title: "This is the COOLEST Cube Ever",
            description:
                "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15.0,
            image:
            'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            
        },
        {
            id: 2,
            title: "Large Coffee Cup",
            description:
                "Get a big cup of coffee every morning before the day starts",
            price: 20.0,
            image:
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
        },
        {
            id: 3,
            title: "Books That CHANGED My Life",
            description:
                "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
            price: 150.0,
            image:
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=417&q=80",
        },
    ],
    cart: [],
    currentItem: null
}

const shopReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = state.products.find((product) => product.id === action.payload.id);
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true :false);
            
            return {
                ...state,
                cart: inCart ? 
                state.cart.map((item) => item.id === action.payload.id ? 
                {...item, qty:item.qty + 1, totqty: (item.price * (item.qty + 1) )} : item ): 
                [...state.cart , { ...item , qty:1, totqty: item.price },]
            }
        case actionType.REMOVE_TO_CART:
            return {
                ...state,
                cart : state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionType.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item )
            }
        case actionType.INCREMENT:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1 , totqty: item.totqty + item.price} : item )
            }
        case actionType.DICREMENT:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? 
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
        default:
            return state 
    }
}

export default shopReducer