import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import ProductsReducer from './reducers/ProductReducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: ProductsReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;