import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const restaurant = restaurants[payload.values.restaurantId];
      restaurant.reviews = restaurant.reviews.concat(payload.values.id);
      return {
        ...restaurants,
      };
    default:
      return restaurants;
  }
};

export default reducer;
