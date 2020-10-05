import React from 'react';
import "./App.css";
import Products  from './products/Products';
import Filter from './filter/Filter';
import Cart from './cart/Cart';
import { Provider } from 'react-redux';
import store from "./store";

import { LOCAL_STORAGE_CART_ITEMS } from './constants/CartConstants';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem(LOCAL_STORAGE_CART_ITEMS) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_ITEMS)) : [],
    }
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems: cartItems });
    localStorage.setItem(LOCAL_STORAGE_CART_ITEMS, JSON.stringify(cartItems));
  }

  removeFromCart = (item) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x._id !== item._id)
    });
    localStorage.setItem(LOCAL_STORAGE_CART_ITEMS, JSON.stringify(cartItems.filter(x => x._id !== item._id)));
  }

  saveOrder = (order) => {
    alert("Need to save the order for " + order.name);
  }
  render() {
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">Shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter />
              <Products
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                saveOrder={this.saveOrder} />
            </div>
          </div>
        </main>
        <footer>This is footer</footer>
      </div>
      </Provider>
    );
  }
}

export default App;
