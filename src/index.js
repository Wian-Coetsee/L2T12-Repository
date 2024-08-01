import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';
import './styles/index.css';

// Creating the Redux store with the root reducer
const store = createStore(rootReducer);

// Rendering the App component wrapped with the Provider component to pass the Redux store to the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
