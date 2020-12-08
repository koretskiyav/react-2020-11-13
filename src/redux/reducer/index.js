import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';

import history from '../../history';

const reducer = combineReducers({
  router: connectRouter(history),
  order,
  restaurants,
  products,
  reviews,
  users,
});

export default reducer;
