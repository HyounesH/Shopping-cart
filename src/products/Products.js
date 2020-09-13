import React from 'react'
import Product from './Product';
import "./Products.css";

export function Products({products, addToCart }) {

    return (
        <div>
            <ul className="products">
                {products.map(product => (
                    <li key={product._id}>
                        <Product product={product} addToCart={addToCart}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
