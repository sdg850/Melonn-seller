import React from 'react'

export default function LineItem( { item } ) {
	return (
        <>
            <span>{item.productName}</span>
            <span>{item.productQty}</span>
			<span>{item.productWeight}</span>

        </>
        
	)
}
