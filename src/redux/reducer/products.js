import { combineReducers } from 'redux';
import { arrToMap, listByIdReducer } from '../utils';
import { LOAD_PRODUCTS, SUCCESS } from '../constants'

// { [productId]: product }
const entities = (state = {}, action) => {
  const { type, response } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return { ...state, ...arrToMap(response) };
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  listByRestaurant: listByIdReducer(LOAD_PRODUCTS)
});
