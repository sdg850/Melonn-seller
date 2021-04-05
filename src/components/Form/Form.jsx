import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContextSeller } from '../../GlobalState/Context/Seller'
import ProductsList from '../Products/ProductsList'


export default function Form() {
	const [state, setState] = useState([])
	const { handleCreateOne, methods } = useContextSeller()
	

	const findedId = methods.find(item => item.name === state.shippingMethod)

	function handleOnchageInput(change) {
		setState(prev => { return { ...prev, ...change } })
	}

	return (
		<div className='conteiner_form'>
			<div className = 'container_grid'>
			<h1 className='text_1'>Create Products Order</h1>
				<div className='container_input'>
					<label htmlFor='SellerStore' >Seller store</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='SellerStore'
						id='SellerStore'
						//value={selectedId.category}
						onChange={e => handleOnchageInput({ sellerStore: e.target.value })}
					/>
				</div>
				<div className='container_input'>
					<label htmlFor='ShippingMethod' >Shipping method</label>
					<select style={{ display: 'block' }} onChange={e => handleOnchageInput({ shippingMethod: e.target.value })}>
						{methods.map(option => (
							<option key={option.id} value={option.name} >{option.name}</option>
						))}
					</select>
				</div>

				<div className='container_input'>
					<label htmlFor='ExternalOrder' >External order number </label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='ExternalOrder'
						id='ExternalOrder'
						//value={selectedId.creation}
						onChange={e => handleOnchageInput({ orderNumber: e.target.value })}
					/>
				</div>

				<div className='container_input'>
					<label htmlFor='BuyerName' >Buyer full name</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='BuyerName'
						id='BuyerName'
						//value={selectedId.expiration}
						onChange={e => { handleOnchageInput({ name: e.target.value }) }}
					/>
				</div>

				<div className='container_input'>
					<label htmlFor='BuyerNumber' >Buyer phone number </label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='BuyerNumber'
						id='BuyerNumber'
						//value={selectedId.category}
						onChange={e => handleOnchageInput({ phoneNumber: e.target.value })}
					/>
				</div>

				<div className='container_input'>
					<label htmlFor='buyerEmail' >Buyer email</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='buyerEmail'
						id='buyerEmail'
						//value={selectedId.name}
						onChange={e => handleOnchageInput({ email: e.target.value })}
					/>
				</div>

				<div className='container_input'>
					<label htmlFor='ShippingAddress' >Shipping address</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='ShippingAddress'
						id='ShippingAddress'
						//value={selectedId.creation}
						onChange={e => handleOnchageInput({ shippingAddress: e.target.value })}
					/>
				</div>

				<div className='container_input'>
					<label htmlFor='ShippingCity' >Shipping city</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='ShippingCity'
						id='ShippingCity'
						//value={selectedId.expiration}
						onChange={e => { handleOnchageInput({ shippingCity: e.target.value }) }}
					/>
				</div>

				<div className='container_input'>
					<label htmlFor='ShippingRegion' >Shipping region</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='ShippingRegion'
						id='ShippingRegion'
						//value={selectedId.category}
						onChange={e => handleOnchageInput({ shippingRegion: e.target.value })}
					/>
				</div>

				<div className='container_input'>
					<label htmlFor='ShippingCountry' >Shipping country</label>
					<input
						style={{ display: 'block' }}
						type='text'
						name='ShippingCountry'
						id='ShippingCountry'
						//value={selectedId.name}
						onChange={e => handleOnchageInput({ shippingCountry: e.target.value })}
					/>
				</div>

			</div>
			<div>
				<ProductsList   handleOnchageInput = { handleOnchageInput } setState = { setState } /> 
			</div>

			<Link to='/'>
				<button className='button_3' onClick={() => handleCreateOne(state, findedId.id)}>Create Order</button>
			</Link>
		</div>
	)
}



