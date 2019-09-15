import _ from 'lodash';
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  let userIds = new Set(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
