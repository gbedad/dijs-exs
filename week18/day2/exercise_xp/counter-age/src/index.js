import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';

const logAction = (store) => (next) => (action) => {
  console.log("Prev state",store.getState())
  console.log("action",action)
  next(action)
  console.log("Caught in the middleware",JSON.stringify(store.getState()))
}

const store = createStore(reducer, applyMiddleware(logAction));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
