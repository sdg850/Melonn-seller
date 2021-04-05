import axios from 'axios'

const urlGetMethods = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/';
const urlGetDays = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days';
const urlServer = 'http://localhost:4000/homepage/';
const api_key = {
  'x-api-key': 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT',
}

export const fetchServerGetAll = async () => axios.get(urlServer)
   
export const fetchServer_GetOne = (id) => {
  axios.get(urlServer + id)
}

export const fetchServer_CreateOne = () => {
  axios.post(urlServer)
}

export const Api_getMethods = () => {
  axios.get(urlGetMethods, {
    headers: api_key
  })
    .then(res => {
      console.log(res.data)

    })
}

export const Api_getDetails = (id) => {
  axios.get(urlGetMethods + id, {
    headers: api_key
  })
    .then(res => {
      console.log(res.data)

    })
}

export const Api_getDays = () => {
  axios.get(urlGetDays, {
    headers: api_key
  })
    .then(res => {
      console.log(res.data)

    })
}

export default fetchServerGetAll;