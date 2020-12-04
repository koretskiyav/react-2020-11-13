// import restaurant from '../../components/restaurant';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  initial: {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
  },
};
// { [productId]: product }
const reducer = (state = initialState, action) => {
  const { type, payload, response, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        initial: {
          loading: true,
          error: null,
        },
      };
    case LOAD_PRODUCTS + SUCCESS:
      const restaurantId = payload.restaurantId;
      return {
        ...state,
        [restaurantId]: {
          entities: arrToMap(response),
          loading: false,
          loaded: true,
        },
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        initial: {
          loading: false,
          loaded: false,
          error,
        },
      };
    default:
      return state;
  }
};

export default reducer;
