import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = { ...restaurant };

  return acc;
}, {});

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { id, restaurantId } = action.payload;

      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurants[restaurantId],
          reviews: [...restaurants[restaurantId].reviews, id],
        },
      };
    default:
      return restaurants;
  }
};

export default reducer;
