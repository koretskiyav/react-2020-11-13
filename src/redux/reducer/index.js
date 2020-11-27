import { combineReducers } from 'redux';

import order from './order';
import restaurants from './restaurants';

const reducer = combineReducers({
  order,
  restaurants,
  foo: (state = 'bar') => state + 'a',
});

export default reducer;
