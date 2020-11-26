import { restaurants } from '../../fixtures';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  return restaurants.reduce(
    (memo, restaurant) => memo.concat(restaurant.menu),
    []
  );
};

export default reducer;
