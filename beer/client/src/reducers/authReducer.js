import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  authorName: null,
  authorId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { authorName, authorId } = action.payload;
      return { ...state, isSignedIn: true, authorName: authorName, authorId: authorId };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, authorId: null, authorName: null };
    default:
      return state;
  }
};
