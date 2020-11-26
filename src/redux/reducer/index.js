import { combineReducers } from 'redux';
import orderReducer from './order';
import productsReducer from './products';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  productList: productsReducer,
});

export default reducer;
