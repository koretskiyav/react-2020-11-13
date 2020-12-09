import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  POST_ORDER,
  REMOVE,
  REQUEST,
  SUCCESS,
} from '../constants';
import produce from 'immer';

const initialState = {
  loading: false,
  error: null,
  entities: {},
};

const reducer = produce((draft = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      draft.entities[payload.id] = (draft.entities[payload.id] || 0) + 1;
      break;
    case DECREMENT:
      draft.entities[payload.id] = Math.max(
        (draft.entities[payload.id] || 0) - 1,
        0
      );
      break;
    case REMOVE:
      draft.entities[payload.id] = 0;
      break;
    case POST_ORDER + REQUEST:
      draft.error = null;
      draft.loading = true;
      break;
    case POST_ORDER + SUCCESS:
      draft.loading = false;
      draft.entities = {};
      break;
    case POST_ORDER + FAILURE:
      draft.loading = false;
      draft.error = action.error;
      break;
    default:
      return draft;
  }
});

export default reducer;
