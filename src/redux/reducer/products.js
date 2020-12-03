import produce from 'immer';
import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

// { [productId]: product }
const reducer = produce((draft = initialState, action) => {
  const { type, response, error, restaurantId } = action;
  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.error = null;
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities[restaurantId] = arrToMap(response);
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});

export default reducer;
