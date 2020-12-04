import produce from 'immer';
import {
  ADD_REVIEW,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
};

const reducer = produce((draft = initialState, action) => {
  const { type, payload, reviewId, userId, restaurantId, response } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST: {
      draft.error = null;
      draft.loading[restaurantId] = true;
      break;
    }
    case LOAD_REVIEWS + SUCCESS: {
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      break;
    }
    case LOAD_REVIEWS + FAILURE: {
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = action.error;
      break;
    }
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});

export default reducer;
