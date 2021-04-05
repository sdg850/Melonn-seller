import { fetchServerGetAll } from '../../api/index'
import { ACTIONS } from '../Actions/Seller'

export const data = async() =>{
	const { data } = await fetchServerGetAll()
	const action = ({ type: ACTIONS.GETALL, payload: data })
	
	return action
	
} 
