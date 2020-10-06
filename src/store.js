import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import CartReducer from './reducers/CartReducer';
import ProductsReducer from './reducers/ProductReducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: ProductsReducer,
        cart: CartReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;