import { DECREMENT, INCREMENT, DISCARD } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
    case DISCARD:
      return Object.keys(state).reduce(
        (newState, id) => payload.id === id ? newState : { ...newState, [id]: state[id] },
        {});
    default:
      return state;
  }
};

export default reducer;
