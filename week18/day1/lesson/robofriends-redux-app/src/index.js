import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppRedux';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import {reducer} from './redux/reducer';

const myLogger = (store) => (next) => (action) => {
  console.log("Prev state",store.getState())
  console.log("action",action)
  next(action)
  console.log("Current state",store.getState())
}

const store = createStore(reducer, applyMiddleware(myLogger, thunk))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
