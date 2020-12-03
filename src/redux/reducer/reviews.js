import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

const reducer = produce((draft = initialState, action) => {
  const {
    type,
    payload,
    reviewId,
    userId,
    response,
    error,
    restaurantId,
  } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.error = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.entities[restaurantId] = response;
      // draft.entities[restaurantId] = arrToMap(response);
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[payload.restaurantId].push({
        id: reviewId,
        userId,
        text,
        rating,
      });
      break;
    default:
      return draft;
  }
});

export default reducer;
