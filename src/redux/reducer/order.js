import { DECREMENT, INCREMENT, CLEAR } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      const newAmount = (state[payload.id] || 0) - 1;
      return newAmount > 0
        ? { ...state, [payload.id]: newAmount }
        : removeProperty(payload.id, state);
    case CLEAR:
      return removeProperty(payload.id, state);
    default:
      return state;
  }
};

const removeProperty = (key, arr) => {
  const { [key]: remove, ...rest } = arr;
  return rest;
};

export default reducer;
