import { LOCAL_STORAGE_CART_ITEMS } from "../constants/CartConstants";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./../types/CartTypes";


const CartReducer = (state = { cartItems: JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_ITEMS) || "[]") }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { cartItems: action.payload.cartItems }
        case REMOVE_FROM_CART:
            return { cartItems: action.payload.cartItems }
        default:
            return state;

    }
}

export default CartReducer;