import React from 'react'
import { connect } from 'react-redux';
import "./SizeFilter.css";
import { filterProducts } from "./../actions/ProductsActions";


class SizeFilter extends React.Component {

    render() {
        const { size, products, filterProducts } = this.props;
        return (
            <div>
                <div className="filter-size">
                    Filter {" "}
                    <select value={size} onChange={(e) => filterProducts(products, e.target.value)}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        size: state.products.size,
        products: state.products.items,
    };
};

export default connect(mapStateToProps, { filterProducts })(SizeFilter);
