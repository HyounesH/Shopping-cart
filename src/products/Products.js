import React from 'react'
import Product from './Product';
import "./Products.css";
import Fade from 'react-reveal/Fade';

export function Products({ products, addToCart }) {

    return (
        <div>
            <Fade bottom cascade={true}>
                <ul className="products">
                    {products.map(product => (
                        <li key={product._id}>
                            <Product prod={product} addToCart={addToCart}
                            />
                        </li>
                    ))}
                </ul>
            </Fade>
        </div>
    )
}
