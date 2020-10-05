import React from 'react'
import { connect } from 'react-redux';
import "./OrderFilter.css";
import { sortProducts } from "./../actions/ProductsActions";
class OrderFilter extends React.Component {

    render() {
        const { sort, filteredItems, sortProducts } = this.props;
        return (
            <div className="filter-sort" >
                Order { " "}
                <select value={sort} onChange={(e) => { sortProducts(filteredItems, e.target.value) }}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sort: state.products.sort,
        filteredItems: state.products.filteredItems,

    };
};
export default connect(mapStateToProps, { sortProducts })(OrderFilter);
