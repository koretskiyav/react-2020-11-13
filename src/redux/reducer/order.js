import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) + 1,
        totalProducts: (state.totalProducts || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: state[payload.id] > 0 ? state[payload.id] - 1 : 0,
        totalProducts:
          state[payload.id] > 0 ? state.totalProducts - 1 : state.totalProducts,
      };
    default:
      return state;
  }
};

export default reducer;
