import { combineReducers } from 'redux';
import orderReducer from './order';
import { restaurants } from '../../fixtures';

const menuItems = restaurants.map((res) => {
  return res.menu;
});

const products = {};
for (let i = 0; i < menuItems.length; i++) {
  for (let j = 0; j < menuItems[i].length; j++) {
    const product = menuItems[i][j];
    products[product.id] = product;
  }
}

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  products: () => products,
});

export default reducer;
