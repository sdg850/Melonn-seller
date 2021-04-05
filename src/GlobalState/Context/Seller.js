import React, { useContext, useEffect, useState, useReducer, useMemo } from 'react'
import reducer from '../Reducers/Seller'
import { ACTIONS } from '../Actions/Seller'
import axios from 'axios'

const ContextSeller = React.createContext()

export function useContextSeller() {
	return useContext(ContextSeller)
}

export function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, [])
	const [methods, setMethods] = useState([])
	const [days, setDays] = useState([])
	const [isOverlay, setIsOverlay] = useState('')
	const [selectedDetail, setSelectedDetail] = useState()


	useEffect(() => {		
			handleGetAll()		
	}, [handleAdd])


	useEffect(() => {
		handleGetAll()
		axios.all([
			axios.get('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/', {
				headers: {
					'x-api-key': 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT',
				}
			}),
			axios.get('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days', {
				headers: {
					'x-api-key': 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT',
				}
			})]
		).then(axios.spread((Methods, Days) => {
			setMethods(Methods.data)
			setDays(Days.data)
		}))

	}, [])



	function handleGetAll() {
		axios.get('http://localhost:4000/homepage/')
			.then((res) => {
				dispatch({ type: ACTIONS.GETALL, payload: res.data })
			})


	}


	function handleAdd() {
		handleCreateOne()
		handleGetAll()
	}



	function handleDetails(id) {
		const newState = [...state]
		const data = newState.find(item => item.id === id)
		setSelectedDetail(data)
	}



	function handleShowDetails() {
		const overlay = () => isOverlay == 'show' ? '' : 'show'
		setIsOverlay(overlay)

	}

	function handleCreateOne(newStat, findedId) {

		const creationProduct = [];
		creationProduct.push(newStat)

		if (findedId) {
			const MethodsDetails = async () => axios.get('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/' + findedId, {
				headers: {
					'x-api-key': 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT',
				}
			}).then((res) => {
				creationProduct.push(res.data)
				axios.post('http://localhost:4000/homepage/', creationProduct)
			})

			MethodsDetails()


		} else {
			axios.post('http://localhost:4000/homepage/', creationProduct)

		}



	}

	const values = {
		handleAdd,
		state,
		methods,
		days,
		isOverlay,
		handleShowDetails,
		selectedDetail,
		handleDetails,		
		handleCreateOne,
		handleGetAll
	}

	return (
		<ContextSeller.Provider value={values}>
			{ children}
		</ContextSeller.Provider>

	)
}

export default useContextSeller;


