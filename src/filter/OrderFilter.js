import React from 'react'
import "./OrderFilter.css";

function OrderFilter({ sort, sortProducts }) {
    return (
        <div className="filter-sort">
            Order {" "}
            <select value={sort} onChange={sortProducts}>
                <option>Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
        </div>
    )
}

export default OrderFilter
