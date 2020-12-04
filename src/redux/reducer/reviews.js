import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import produce from 'immer';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return produce(state, (draft) => {
        draft.loading[payload.restaurantId] = true;
        draft.error[payload.restaurantId] = null;
      });

    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        Object.assign(draft.entities, arrToMap(response));
        draft.loading[payload.restaurantId] = false;
        draft.loaded[payload.restaurantId] = true;
      });
    case LOAD_REVIEWS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[payload.restaurantId] = false;
        draft.loaded[payload.restaurantId] = false;
        draft.error[payload.restaurantId] = error;
      });
    case ADD_REVIEW:
      const { text, rating } = payload.review;

      return produce(state, (draft) => {
        draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      });
    default:
      return state;
  }
};

export default reducer;
