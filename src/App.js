import React from 'react';
import data from './data.json';
import "./App.css";
import { Products } from './products/Products';
import Filter from './filter/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
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
  render() {
    return (
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
              />
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
