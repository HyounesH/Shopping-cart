import React from 'react';
import data from './data.json';
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
      products: [],
      cartItems: localStorage.getItem(LOCAL_STORAGE_CART_ITEMS) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_ITEMS)) : [],
      size: "",
      sort: "",
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
  filterProducts = (event) => {
    const currentSize = event.target.value;
    this.setState({
      size: currentSize,
      products: currentSize === "" ? data.products : data.products.filter(product => product.availableSizes.indexOf(currentSize) >= 0)
    });
  }
  sortProducts = (event) => {
    const currentSort = event.target.value;
    this.setState((state) => ({
      sort: currentSort,
      products: state.products.slice()
        .sort((a, b) =>
          currentSort === "highest" ?
            a.price < b.price ? 1 : -1 :
            currentSort === "lowest" ?
              a.price > b.price ? 1 : -1 :
              a._id < b._id ? 1 : -1
        ),

    }));
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
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products}
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
