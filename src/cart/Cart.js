import React from 'react'
import "./Cart.css";
import formatCurrency from '../utils';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux";
import { removeFromCart } from "./../actions/CartActions";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false,
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }
        this.props.saveOrder(order);
    }
    render() {
        const { showCheckout } = this.state;
        const { cartItems, removeFromCart } = this.props;
        return (
            <div>
                <div>
                    {cartItems.length === 0 ?
                        <div className="cart cart-header">Cart is empty</div>
                        :
                        <div className="cart cart-header">You have {cartItems.length} in the cart {" "}</div>
                    }
                </div>
                <div className="cart">
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count} {" "}
                                            <button className="button" onClick={() => removeFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>
                    </Fade>
                </div>
                {
                    cartItems.length !== 0 &&
                    <div>
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total: {" "}
                                    {formatCurrency(
                                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                    )}
                                </div>
                                <button onClick={() => { this.setState({ showCheckout: true }) }} className="button primary">Preceed</button>
                            </div>
                        </div>
                        {showCheckout && (
                            <Fade right cascade >
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <label>Email</label>
                                                <input name="email" type="email" required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input name="name" type="text" required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <label>Adresse</label>
                                                <input name="address" type="text" required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <button className="button primary" type="submit">Checkout</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </Fade>
                        )
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
};
export default connect(mapStateToProps, { removeFromCart })(Cart);
