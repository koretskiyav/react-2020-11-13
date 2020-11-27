import { DECREMENT, INCREMENT, DELETING } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };

    case DECREMENT:
      if (state[payload.id] > 1) {
        return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
      } else {
        const newState = { ...state };
        delete newState[payload.id];
        return newState;
      }

    case DELETING:
      const newState = { ...state };
      delete newState[payload.id];
      return newState;

    default:
      return state;
  }
};

export default reducer;
