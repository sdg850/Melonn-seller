import React  from 'react'
import { useContextSeller } from '../../../GlobalState/Context/Seller'

export default function Seller(props) {
    const {
        id,
        name,
        orderNumber,
        creationDate,
        sellerStore,
		shippingMethod
       } = props

      
     const {        
        handleShowDetails,
        handleDetails
        } = useContextSeller();

    function handleSelectedDetail(id){
        handleDetails(id)
        handleShowDetails()
    }

    return (

        <div className='Style__container'>

            <div>
                <h1 className = 'text__Card_title' > {name} </h1>   
            </div>
            <div  style={{ width: '9.6rem'}} >
                <span className = 'text__Card_label' >Order Number:</span>
                <span className = 'text__Card_value'>{orderNumber}</span>
            </div>
            <div>
                <span className = 'text__Card_label'>Creation date:</span>
                <span className = 'text__Card_value'>{creationDate}</span>
            </div>
            <div>
                <span className = 'text__Card_label'>Seller Store:</span>
                <span className = 'text__Card_value'>{sellerStore}</span>
            </div>
            <div>
                <span className = 'text__Card_label'>Shipping Methode:</span>
                <span className = 'text__Card_value'>{shippingMethod}</span>
            </div>            
 
            <div>
              <button className = 'button_3' onClick={ ()=> handleSelectedDetail(id) } >More Details</button>
            </div>

        </div>
    )
}
