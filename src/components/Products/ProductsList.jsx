import React, { useState } from 'react'
import LineItemsList from '../Details/LineItem/LineItemsList'
import uuidv4 from 'uuid/v4';

export default function ProductsList( { setState }) {
	const [ lineItemsObject, setLineItemsObject ] = useState()
	const [ lineItems, setLineItems ] = useState([])
	const [ isSave, setLIsSave ] = useState(false)
	
	
	function handleOnchangeLinesItems(products){
		setLIsSave(false)
		setLineItemsObject(prev => { return { ...prev, ...products, ...{ id: uuidv4() } }})			
	}

	function handleAddProducts(){
		setLineItems( prev => [ ...prev, lineItemsObject ])		
		setState(prev => { return{ ...prev, ...{ lineItem: lineItems } }})
		setLIsSave(true)

	}

	return (
		<div className='container_input_add'>
			<h1 className = 'text_1'>Add Product</h1>
				 <div>
					<label htmlFor='lineItems' >product Name</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='lineItems'
						id='lineItems'
					value=  {lineItems.productName}
					onChange={e => handleOnchangeLinesItems({ productName: e.target.value })}
					/>
					</div>
					<div>
					<label htmlFor='lineItems' >Quantity</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='lineItems'
						id='lineItems'
					value=  {lineItems.productQty}
					onChange={e => handleOnchangeLinesItems({ productQty: e.target.value })}
					/>
					</div>
					<div>
					<label htmlFor='lineItems' >Weight</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='lineItems'
						id='lineItems'
					value= {lineItems.productWeight}
					onChange={e => handleOnchangeLinesItems({ productWeight: e.target.value })}
					/>
					</div>					
					<button className='button_3' onClick={() => handleAddProducts()}> Add New Product</button>

					{isSave  && <LineItemsList  LineItems={lineItems} />}
					
				</div>
	)
}
