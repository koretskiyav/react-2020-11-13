import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

// { [productId]: product }
const reducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};

export default reducer;
