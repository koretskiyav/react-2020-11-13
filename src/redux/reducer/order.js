import produce from 'immer';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  BUY_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

// { [productId]: amount }
const initialState = {
  entities: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case INCREMENT:
      return produce(state, (draft) => {
        draft.entities[payload.id] = (draft.entities[payload.id] || 0) + 1;
      });
    case DECREMENT:
      return produce(state, (draft) => {
        draft.entities[payload.id] = Math.max(
          (draft.entities[payload.id] || 0) - 1,
          0
        );
      });
    case REMOVE:
      return produce(state, (draft) => {
        draft.entities[payload.id] = 0;
      });
    case BUY_ORDER + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BUY_ORDER + SUCCESS:
      return {
        ...state,
        loading: false,
        entities: {},
      };
    case BUY_ORDER + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default reducer;
