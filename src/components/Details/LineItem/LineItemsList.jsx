import React from 'react'
import LineItem from './LineItem/LineItem'

export default function LineItemsList({ LineItems }) {
    return (
        <div className='lineItems--grid'>
            <h4>Product Name:</h4>
            <h4>Quantity:</h4>
            <h4>Weight:</h4>
            {LineItems.map(item => {
                return( <LineItem key={item.id} item={item} /> )
            })}
        </div>
    )
}


