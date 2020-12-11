import { DECREMENT, INCREMENT, REMOVE, CHECKOUT, SUCCESS } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: Math.max((state[payload.id] || 0) - 1, 0),
      };
    case REMOVE:
      return {
        ...state,
        [payload.id]: 0,
      };

    case CHECKOUT + SUCCESS:
      return {};
    default:
      return state;
  }
};

export default reducer;
