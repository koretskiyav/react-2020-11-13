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

const reducer = produce((draft = initialState, action) => {
  const { type, payload, reviewId, response, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_RESTAURANTS + SUCCESS:
      draft.entities = {
        ...draft.entities,
        ...arrToMap(response),
      };
      draft.loading = false;
      draft.loaded = true;
      break;
    case LOAD_RESTAURANTS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      draft.entities[payload.restaurantId].reviews.push(reviewId);
      break;
    default:
      return draft;
  }
});

export default reducer;
