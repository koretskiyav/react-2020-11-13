import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  visited: [],
};

const reducer = produce((draft = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.entities = {
        ...draft.entities,
        ...arrToMap(response),
      };
      draft.loading = false;
      draft.loaded = true;
      draft.visited.push(payload?.restaurantId);
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});

export default reducer;
