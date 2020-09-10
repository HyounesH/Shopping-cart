import React from 'react'
import Product from './Product';
import "./Products.css";

export function Products(props) {

    return (
        <div>
            <ul className="products">
                {props.products.map(product => (
                    <li key={product._id}>
                        <Product
                            _id={product._id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
