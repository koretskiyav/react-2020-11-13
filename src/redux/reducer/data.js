import { ADD_DATA } from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA:
      return { ...state, data: [...payload.data] };

    default:
      return state;
  }
};

export default reducer;
