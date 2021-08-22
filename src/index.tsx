import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose } from "redux";
import {Provider} from 'react-redux';
import allReducers from './redux/reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
