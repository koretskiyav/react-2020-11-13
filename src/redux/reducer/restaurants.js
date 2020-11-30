import { normalizedRestaurants } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type, payload, meta } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { id } = payload;
      const { restaurantId } = meta;
      const restaurant = restaurants[restaurantId];
      const { reviews } = restaurant;

      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurant,
          reviews: reviews ? reviews.concat(id) : [id],
        },
      };
    default:
      return restaurants;
  }
};

export default reducer;
