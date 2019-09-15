import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  EDIT_POST,
  DELETE_POST,
  FETCH_COMMENTS,
  CREATE_COMMENT,
  RATE_POST
} from "./types";
import backendAPI from "../apis/backendAPI";
import history from "../history";
export const signIn = (authorName, authorId) => {
  return {
    type: SIGN_IN,
    payload: { authorName, authorId }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createPost = ({ title, body }) => async (dispatch, getState) => {
  const { authorName, authorId } = getState().auth;
  const response = await backendAPI.post("/posts", {
    title: title,
    body: body,
    authorName: authorName,
    authorId: authorId
  });
  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/");
};

export const fetchPosts = () => async dispatch => {
  const response = await backendAPI.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data.posts });
  //response.data.posts.forEach(post => dispatch(deletePost(post._id)));
};

export const fetchPost = id => async dispatch => {
  const response = await backendAPI.get(`/posts/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data.post });
};

export const editPost = (id, newValues) => async dispatch => {
  const response = await backendAPI.patch(`/posts/${id}`, newValues);
  dispatch({ type: EDIT_POST, payload: response.data.post });
  history.push(`/posts/${id}`);
};

export const deletePost = id => async dispatch => {
  await backendAPI.delete(`/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
  history.push("/");
};

export const fetchComments = postId => async dispatch => {
  const response = await backendAPI.get(`/comments/${postId}`);
  return dispatch({ type: FETCH_COMMENTS, payload: response.data.comment });
};

export const createComment = (body, postId) => async (dispatch, getState) => {
  const { authorName } = getState().auth;

  const response = await backendAPI.post("/comments", {
    body: body,
    authorName: authorName,
    postId: postId
  });
  return dispatch({ type: CREATE_COMMENT, payload: response.data.comment });
};

export const ratePost = (rating, postId) => async dispatch => {
  const response = await backendAPI.patch(`/posts/rate/${postId}`, rating);
  return dispatch({ type: RATE_POST, payload: response.data.post });
};
