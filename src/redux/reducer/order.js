import produce from 'immer';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  CHECKOUT,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  saving: false,
  error: null,
  entities: {},
};

const reducer = produce((draft = initialState, action) => {
  const { type, payload, error } = action;

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
    case CHECKOUT + REQUEST:
      draft.error = null;
      draft.saving = true;
      break;
    case CHECKOUT + SUCCESS: {
      draft.saving = false;
      draft.entities = {};
      break;
    }
    case CHECKOUT + FAILURE: {
      draft.saving = false;
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});

export default reducer;
