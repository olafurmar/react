import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer';

//the reducer has to have the key 'form'
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});