import { normalizedRestaurants } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBMIT:
      const restaurantToUpdate = restaurants[payload.restaurantId];
      return {
        ...restaurants,
        [payload.restaurantId]: {
          ...restaurantToUpdate,
          reviews: [...restaurantToUpdate.reviews, payload.id],
        },
      };
    default:
      return restaurants;
  }
};

export default reducer;
