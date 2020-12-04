import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

const reducer = produce((draft = initialState, action) => {
  const { type, payload, userId, response, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_USERS + SUCCESS:
      draft.entities = arrToMap(response);
      draft.loading = false;
      draft.loaded = true;
      break;
    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { name } = payload.review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});

export default reducer;
