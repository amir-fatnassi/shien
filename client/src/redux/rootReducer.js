import { combineReducers } from 'redux';
import shopReducer from './shopping/shopping-reducer'
import UserAuthReducer from './userAuthontication/UserAuthList-reducer'

const rootReducer = combineReducers({
    shop: shopReducer,
    User: UserAuthReducer
});

export default rootReducer