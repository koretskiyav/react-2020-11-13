import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_RESTAURANTS,
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
  const { type, payload, reviewId, response, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_RESTAURANTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      };
    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};

export default reducer;
