import { CHECKOUT, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  processing: false,
};

const checkout = (state = initialState, action) => {
  const { type, error } = action;

  switch (type) {
    case CHECKOUT + REQUEST:
      return {
        ...state,
        processing: true,
      };

    case CHECKOUT + SUCCESS:
    case CHECKOUT + FAILURE:
      return {
        ...state,
        processing: false,
      };
    default:
      return state;
  }
};

export default checkout;
