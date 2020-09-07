import React, { Component } from 'react';
import "./Product.css";
import formatCurrency from '../utils';

export default class Product extends Component {
    render() {
        return (
            <div className="product">
                <a href={"#" + this.props._id}>
                    <img src={this.props.image} alt={this.props.title} />
                    <p>{this.props.title}</p>
                </a>
                <div className="product-price">
                    <div>{formatCurrency(this.props.price)}</div>
                    <button className="button primary">Add To Cart</button>
                </div>
            </div>
        )
    }
}
