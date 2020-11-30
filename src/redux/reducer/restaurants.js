import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { id, activeRestaurant } = action.payload;
      const restaurant = restaurants[activeRestaurant];
      restaurant.reviews.push(id);
      return { ...restaurants };
    default:
      return restaurants;
  }
};

export default reducer;
