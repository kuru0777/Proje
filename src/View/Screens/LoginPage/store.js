// store.js
import { createStore } from 'redux';
import authReducer from './authReducer'; // Redux reducer'larının birleştirildiği dosya

const store = createStore(authReducer);

export default store;
