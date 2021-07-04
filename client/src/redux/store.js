import { createStore, applyMiddleware, compose  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), composeWithDevTools())
    )

export default store 