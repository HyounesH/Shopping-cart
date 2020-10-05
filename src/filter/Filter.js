import React from 'react'
import OrderFilter from './OrderFilter'
import SizeFilter from './SizeFilter'
import "./Filter.css"
import { connect } from 'react-redux';

class Filter extends React.Component {
    render() {
        const {filteredProducts } = this.props;
        return (
            !filteredProducts ?
                (<div>Loading ...</div>)
                :
                (
                    <div className="filter">
                        <div className="filter-result">{filteredProducts.length} Products</div>
                        <OrderFilter />
                        <SizeFilter />
                    </div>
                )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filteredProducts: state.products.filteredItems
    };
}

export default connect(mapStateToProps)(Filter);
