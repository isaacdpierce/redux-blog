// Remember all actions must have a type
const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
 return {
  type: FETCH_POSTS
 };
}