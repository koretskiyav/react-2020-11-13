// import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      };
    case LOAD_USERS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      // const { name } = payload.review;
      // draft[userId] = { id: userId, name };
      break;
    default:
      return state;
  }
};

export default reducer;
