import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE, SUBMIT_ORDER, SUCCESS, REQUEST, FAILURE } from '../constants';

const initialState = {
  items: {}, // { [productId]: amount }
  processing: false,
  error: null
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload, error } = action;
    switch (type) {
      case INCREMENT:
        draft.items[payload.id] = (state.items[payload.id] || 0) + 1;
        break;
      case DECREMENT:
        draft.items[payload.id] = Math.max((state.items[payload.id] || 0) - 1, 0);
        break;
      case REMOVE:
        draft.items[payload.id] = 0;
        break;
      case SUBMIT_ORDER + REQUEST:
        draft.processing = true;
        draft.error = null;
        break;
      case SUBMIT_ORDER + SUCCESS:
        draft.items = {};
        draft.processing = false;
        break;
      case SUBMIT_ORDER + FAILURE:
        draft.processing = false;
        draft.error = error;
        break;
      default:
        return;
    }
  });

export default reducer;
