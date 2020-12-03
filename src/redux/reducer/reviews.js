import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  initial: {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        initial: {
          loading: true,
          error: null,
        },
      };
    case LOAD_REVIEWS + SUCCESS:
      const restaurantId = payload.restaurantId;
      return {
        ...state,
        [restaurantId]: {
          entities: arrToMap(response),
          loading: false,
          loaded: true,
        },
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        initial: {
          loading: false,
          loaded: false,
          error,
        },
      };
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
  }
};

export default reducer;
