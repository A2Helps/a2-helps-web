import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseProvider } from './components/auth/Firebase';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
import { Model } from 'vue-api-query';
import '@stripe/stripe-js';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// inject global axios instance as http client to Model
Model.$http = axios
