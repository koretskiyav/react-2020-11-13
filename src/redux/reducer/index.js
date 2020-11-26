import { combineReducers } from 'redux';
import orderReducer from './order';
import addData from './data';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  data: addData,
});

export default reducer;
