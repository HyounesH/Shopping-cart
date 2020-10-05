import React from 'react'
import Product from './Product';
import "./Products.css";
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import { fetchProducts } from './../actions/ProductsActions';

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        const { addToCart, products } = this.props;
        return (
            <div>
                <Fade bottom cascade={true}>
                    {!products ?
                        (<div> Loading ... </div>
                        ) : (
                            <ul className="products">
                                {products.map(product => (
                                    <li key={product._id}>
                                        <Product prod={product} addToCart={addToCart}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                </Fade>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { products: state.products.items };
};
export default connect(mapStateToProps, { fetchProducts })(Products);
