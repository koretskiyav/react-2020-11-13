import { combineReducers } from 'redux';

import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';
import activeRestaurant from './activeRestaurant';

const reducer = combineReducers({
  order,
  restaurants,
  products,
  users,
  reviews,
  activeRestaurant,
});

export default reducer;
