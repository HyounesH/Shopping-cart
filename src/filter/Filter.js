import React from 'react'
import OrderFilter from './OrderFilter'
import SizeFilter from './SizeFilter'
import "./Filter.css"

export default function Filter({ count, size, sort, sortProducts, filterProducts }) {

    return (
        <div className="filter">
            <div className="filter-result">{count} Products</div>
            <OrderFilter sort={sort}
                sortProducts={sortProducts} />
            <SizeFilter size={size}
                filterProducts={filterProducts} />
        </div>
    )

}
