const express = require('express')
const router = express.Router()
const { ModelExample } = require('../models/ExampleModel.json')
const  { crationModel } = require('../models/CreationModel.json')
const { uuid } = require('uuidv4');



router.get('/', (req, res) =>{
	res.send(ModelExample )
})

router.post('/', (req, res) => {
      const date = new Date()
   
   const newRecord = req.body;
   const email = req.body[0].email
   const name = req.body[0].name
   const orderNumber = req.body[0].orderNumber
   const shippingMethod = req.body[0].shippingMethod
   const phoneNumber = req.body[0].phoneNumber
   const sellerStore = req.body[0].sellerStore
   const shippingAddress = req.body[0].shippingAddress
   const shippingRegion = req.body[0].shippingRegion
   const shippingCity = req.body[0].shippingCity
   const shippingCountry = req.body[0].shippingCountry
   const lineItem = req.body[0].lineItem

   const pack_promise_min = req.body[1].rules.promisesParameters.cases[0].packPromise.min.deltaHours
   const pack_promise_max = req.body[1].rules.promisesParameters.cases[0].packPromise.max.deltaHours

   
   const ship_promise_min = req.body[1].rules.promisesParameters.cases[0].shipPromise.min.deltaHours
   const ship_promise_max = req.body[1].rules.promisesParameters.cases[0].shipPromise.max.deltaHours

   
   const delivery_promise_min = req.body[1].rules.promisesParameters.cases[0].deliveryPromise.min.deltaHours
   const delivery_promise_max = req.body[1].rules.promisesParameters.cases[0].deliveryPromise.max.deltaHours

   
   const ready_pickup_promise_min = req.body[1].rules.promisesParameters.cases[0].readyPickUpPromise.min.deltaHours
   const ready_pickup_promise_max = req.body[1].rules.promisesParameters.cases[0].readyPickUpPromise.max.deltaHours

  


   const internalOrderNumber=  date + Math.floor(Math.random() * 100)
   const creationDate = date
   const newObject = { ...crationModel, id: uuid(), internalOrderNumber : internalOrderNumber, 
   creationDate:creationDate, name: name, email:email, orderNumber: orderNumber, phoneNumber:phoneNumber, sellerStore:sellerStore, shippingAddress:shippingAddress, shippingRegion:shippingRegion, shippingCity:shippingCity, shippingCountry: shippingCountry, lineItem: lineItem, shippingMethod: shippingMethod, pack_promise_min: pack_promise_min, pack_promise_max: pack_promise_max, ship_promise_min: ship_promise_min, ship_promise_max: ship_promise_max, delivery_promise_min:delivery_promise_min, delivery_promise_max: delivery_promise_max, ready_pickup_promise_min: ready_pickup_promise_min, ready_pickup_promise_max: ready_pickup_promise_max }
   
   ModelExample.push({ ...newRecord, ...newObject })

   res.send(ModelExample)
})





module.exports = router