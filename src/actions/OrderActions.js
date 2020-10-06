import { LOCAL_STORAGE_CART_ITEMS } from "../constants/CartConstants";
import { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART } from "../types/OrderTypes";


export const createOrder = (order) => (dispatch) => {
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }).then(res => res.json())
        .then(data => {
            dispatch(
                { type: CREATE_ORDER, payload: data }
            );
            localStorage.clear(LOCAL_STORAGE_CART_ITEMS);
            dispatch({ type: CLEAR_CART });
        });
}

export const clearOrder = () => (dispatch) => {
    dispatch({
        type: CLEAR_ORDER
    });
}
