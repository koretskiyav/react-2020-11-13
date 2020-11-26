import { combineReducers } from 'redux';
import orderReducer from './order';
import productsReducer from './products';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  products: productsReducer
});

export default reducer;
