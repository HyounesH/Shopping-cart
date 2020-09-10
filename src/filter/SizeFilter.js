import React from 'react'
import "./SizeFilter.css";

function SizeFilter({ size, filterProducts }) {
    return (
        <div>
            <div className="filter-size">
                Filter {" "}
                <select value={size} onChange={filterProducts}>
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

export default SizeFilter
