import axios from 'axios';
// Remember all actions must have a type
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';
export const FETCH_POST = 'fetch_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=buddyboy9090';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

 return {
  type: FETCH_POSTS,
  payload: request // because api request is assigned to payload: property it will automatically be resolved by the Redux middleware 
 };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}