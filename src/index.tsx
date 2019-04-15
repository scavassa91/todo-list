import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/mainReducer';
import { Provider } from 'react-redux';

import httpInterceptor from './interceptor/http-interceptor';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

httpInterceptor.requestInterceptor();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
