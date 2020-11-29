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
      const id = payload.restId;
      const reviewId = payload.id;
      const newReviews = [...restaurants[id].reviews, reviewId];
      const newRestaurant = { ...restaurants[id], reviews: newReviews };
      return { ...restaurants, [id]: newRestaurant };
    default:
      return restaurants;
  }
};

export default reducer;
