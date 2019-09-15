/*
{id1 : {
  id1,
  stream1,
  description1
},
id2:{
  id2,
  title2,
  description2
}...
}
how to add an key to an object:
{...oldObj, [newKey]: newObj}
*/
import _ from "lodash";
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
