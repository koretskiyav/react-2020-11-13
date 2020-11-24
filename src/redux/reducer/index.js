import { combineReducers } from 'redux';
import orderReducer from './order';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
});

export default reducer;
