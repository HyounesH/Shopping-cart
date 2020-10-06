import React from 'react';
import "./App.css";
import Products from './products/Products';
import Filter from './filter/Filter';
import Cart from './cart/Cart';
import { Provider } from 'react-redux';
import store from "./store";

class App extends React.Component {
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
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
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
