import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  posts: postReducer,
  comments: commentReducer
});
