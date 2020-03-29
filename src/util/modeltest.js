import axios from 'axios';
import { Model } from 'vue-api-query';

// import Donation from '../models/donation'
import Code from '../models/code'

// inject global axios instance as http client to Model
Model.$http = axios

// set local env
process.env.REACT_APP_API_URL = 'http://localhost:8000/v1';

// log requests
axios.interceptors.request.use(request => {
	console.log('Starting request', request)
	return request
})


// let d = new Donation({ id: 'Xk7eFb4wdydjZ2X9S9oHCG' });
// d.cancel(); // returns promise

Code.where('used', true).get()
