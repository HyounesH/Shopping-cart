import React from 'react';
import data from './data.json';
import "./App.css";
import { Products } from './products/Products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar"></div>
          </div>
        </main>
        <footer>This is footer</footer>
      </div>
    );
  }
}

export default App;
