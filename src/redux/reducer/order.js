import { DECREMENT, INCREMENT, RESET } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      const count = state[payload.id] || 0;

      return { ...state, [payload.id]: count === 0 ? 0 : count - 1 };
    case RESET:
      return { ...state, [payload.id]: 0 };
    default:
      return state;
  }
};

export default reducer;
