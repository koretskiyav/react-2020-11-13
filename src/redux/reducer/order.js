import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload = {} } = action;
  const { id: productId } = payload;
  const productAmount = state[productId] || 0;

  switch (type) {
    case INCREMENT:
      return { ...state, [productId]: productAmount + 1 };
    case DECREMENT:
      return { ...state, [productId]: Math.max(productAmount - 1, 0) };
    default:
      return state;
  }
};

export default reducer;
