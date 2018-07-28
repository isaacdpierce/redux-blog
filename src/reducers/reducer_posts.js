import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data}; 
      // [action.payload.data.id] = key interpolation (it is not an array) -> turns inner data into a key
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); // lodash method to turn an array into individual objects based on a key
    default: 
    return state;
  }
}