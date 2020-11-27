import { DECREMENT, INCREMENT, CLEAR } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
    case CLEAR:
      const result = { ...state };
      delete result[payload.id];
      return result;
    default:
      return state;
  }
};

export default reducer;
