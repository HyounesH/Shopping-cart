import React from 'react';
import "./Product.css";
import formatCurrency from '../utils';

export default function Product({ product, addToCart }) {

    return (
        <div className="product">
            <a href={"#" + product._id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
            </a>
            <div className="product-price">
                <div>{formatCurrency(product.price)}</div>
                <button className="button primary" onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </div>
    )
}
