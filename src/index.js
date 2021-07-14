import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {setStartUser} from './actions/userAction';
import {startSetCustomer} from './actions/customerAction';

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

//handle page reloads
if(localStorage.getItem('authToken')){
  store.dispatch(setStartUser())
  store.dispatch(startSetCustomer())
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
