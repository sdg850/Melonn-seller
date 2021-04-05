import React from 'react'
import { useContextSeller } from '../../GlobalState/Context/Seller'
import LineItemsList from './LineItem/LineItemsList'


export default function Details() {

	const { handleShowDetails, selectedDetail } = useContextSeller()


	return (

		<div className='show'>

			<div className="recipe">
				<div className="recipe__header">
					<h3 className="recipe__title">Order information</h3>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>External order number:</span>
					<span className='recipe__value'>{selectedDetail.orderNumber}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>Buyer full name:</span>
					<span className='recipe__value'>{selectedDetail.name}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>Buyer phone number:</span>
					<span className='recipe__value'>{selectedDetail.phoneNumber}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>Buyer email:</span>
					<span className='recipe__value'>{selectedDetail.email}</span>
				</div>				
			</div>



			<div className="recipe">
				<div className="recipe__header">
					<h3 className="recipe__title">Shipping info</h3>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>shipping address:</span>
					<span className='recipe__value'>{selectedDetail.shippingAddress}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>shipping city:</span>
					<span className='recipe__value'>{selectedDetail.shippingCity}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>shipping region:</span>
					<span className='recipe__value'>{selectedDetail.shippingRegion}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>shipping country:</span>
					<span className='recipe__value'>{selectedDetail.shippingCountry}</span>
				</div>
			</div>

			<div className="recipe">
				<div className="recipe__header">
					<h3 className="recipe__title">Promise dates</h3>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>pack_promise_min:</span>
					<span className='recipe__value'>{selectedDetail.pack_promise_min}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>pack_promise_max:</span>
					<span className='recipe__value'>{selectedDetail.pack_promise_max}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>ship_promise_min:</span>
					<span className='recipe__value'>{selectedDetail.ship_promise_min}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>ship_promise_max:</span>
					<span className='recipe__value'>{selectedDetail.ship_promise_max}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>delivery_promise_min:</span>
					<span className='recipe__value'>{selectedDetail.delivery_promise_min}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>delivery_promise_max:</span>
					<span className='recipe__value'>{selectedDetail.delivery_promise_max}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>ready_pickup_promise_min:</span>
					<span className='recipe__value'>{selectedDetail.ready_pickup_promise_min}</span>
				</div>
				<div className='recipe__row'>
					<span className='recipe__label'>ready_pickup_promise_max:</span>
					<span className='recipe__value'>{selectedDetail.ready_pickup_promise_max}</span>
				</div>
			</div>

			<div>
				<h3 className='recipe__title'>Line items:</h3>
				<div className='recipe__value recipe__value--indented'>
					<LineItemsList LineItems={selectedDetail.lineItem} />
				</div>
			</div>
			<button className='button_2' onClick={handleShowDetails}>Go Back</button>

		</div>
	)
}
