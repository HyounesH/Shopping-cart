const { FETCH_PRODUCTS } = require("../types/ProductsTypes")

const ProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {items: action.payload };
        default:
            return state;
    }
}

export default ProductsReducer;