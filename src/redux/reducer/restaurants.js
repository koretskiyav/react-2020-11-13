import { normalizedRestaurants } from '../../fixtures';
import { REVIEW_ADD } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({...acc, [restaurant.id]: restaurant}),
  {});

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case REVIEW_ADD:
      const restaurant = restaurants[payload.restaurantId];
      return {
        ...restaurants,
        [restaurant.id]: {
          ...restaurant,
          reviews: [payload.id, ...restaurant.reviews]
        }
      };
    default:
      return restaurants;
  }
};

export default reducer;
