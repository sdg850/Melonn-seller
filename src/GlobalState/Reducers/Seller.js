import { ACTIONS } from '../Actions/Seller.js'

const reducer = (state, action) =>{
	switch(action.type){
		case ACTIONS.GETALL:
			return action.payload
		case ACTIONS.CREATE:
			return state
	    case ACTIONS.DETAILS:	
		  return state
		default:
			return state
	}
}

export default reducer;