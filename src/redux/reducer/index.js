import { combineReducers } from 'redux';

import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';

const reducer = combineReducers({
  order,
  restaurants,
  products,
  reviews,
});

export default reducer;
