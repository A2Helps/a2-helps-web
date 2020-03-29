import { Model as BaseModel } from 'vue-api-query';
import axios from 'axios';

BaseModel.$http = axios;


export default class Model extends BaseModel {
	// define a base url for a REST API
	baseURL () {
		return process.env.REACT_APP_API_URL;
	}

	// implement a default request method
	request (config) {
		return this.$http.request(config);
	}
}
