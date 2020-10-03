import React, { useState } from 'react'
import "./Cart.css";
import formatCurrency from '../utils';
import Fade from 'react-reveal/Fade';

export default function Cart({ cartItems, removeFromCart, saveOrder }) {
    const [showCheckout, setShowCheckout] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: name,
            email: email,
            address: address,
            cartItems: cartItems
        }
        saveOrder(order);
    }
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
            {cartItems.length !== 0 &&
                <div>
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total: {" "}
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                )}
                            </div>
                            <button onClick={() => { setShowCheckout(true) }} className="button primary">Preceed</button>
                        </div>
                    </div>
                    {showCheckout && (
                        <Fade right cascade >
                            <div className="cart">
                                <form onSubmit={createOrder}>
                                    <ul className="form-container">
                                        <li>
                                            <label>Email</label>
                                            <input name="email" type="email" required onChange={e => setEmail(e.target.value)} />
                                        </li>
                                        <li>
                                            <label>Name</label>
                                            <input name="name" type="text" required onChange={e => setName(e.target.value)} />
                                        </li>
                                        <li>
                                            <label>Adresse</label>
                                            <input name="address" type="text" required onChange={e => setAddress(e.target.value)} />
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
