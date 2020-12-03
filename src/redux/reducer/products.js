import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  loadedEntities: {},
};

// { [productId]: product }
const reducer = (state = initialState, action) => {
  const { type, response, restaurantId, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      console.log('products success');
      console.log('rest id', restaurantId);
      return {
        ...state,
        loading: false,
        loadedEntities: {
          ...state.loadedEntities,
          [restaurantId]: arrToMap(response),
        },
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default reducer;
