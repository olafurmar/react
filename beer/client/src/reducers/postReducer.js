import {
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  EDIT_POST,
  DELETE_POST,
  RATE_POST
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      var post = action.payload.post;
      return { ...state, [post._id]: post };
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };

    case FETCH_POST:
      return { ...state, [action.payload._id]: action.payload };

    case EDIT_POST:
      return { ...state, [action.payload._id]: action.payload };

    case DELETE_POST:
      return _.omit(state, action.payload);

    case RATE_POST:
      return { ...state, [action.payload._id]: action.payload };

    default:
      return state;
  }
};
