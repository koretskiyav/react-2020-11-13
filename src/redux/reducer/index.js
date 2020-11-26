import { combineReducers } from 'redux';
import orderReducer from './order';
import restaurantsReducer from './restaurants';
import productsReducer from './products';

const reducer = combineReducers({
  order: orderReducer,
  restaurants: restaurantsReducer,
  products: productsReducer,
});

export default reducer;
