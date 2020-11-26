import { restaurants } from '../../fixtures';

const products = restaurants
  .map(r  => r.menu)
  .flat()
  .reduce((products, product) => ({...products, [product.id]: product}), {});

const reducer = (state = products, action) => {
  return state;
};

export default reducer;
