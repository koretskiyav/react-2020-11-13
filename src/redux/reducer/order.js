import { DECREMENT, INCREMENT, DELETEPRODUCT } from '../constants';

const intialState = {};

// { [productId]: amount }
const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      console.log('red, increment', type, payload, state);

      // const newState = { ...state };
      // const currentAmoount = state[payload.id] || 0;
      // const newAmount = currentAmoount + 1
      // newState[payload.id] = newAmount
      // return newState;

      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      console.log('red, decrement', type, payload, state);
      return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
    case DELETEPRODUCT:
      console.log('red, deleteProduct', type, payload, state);
      return { ...state, [payload.id]: 0 };
    default:
      return state;
  }
};

export default reducer;
