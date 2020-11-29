import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = { ...restaurant };

  return acc;
}, {});

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};

export default reducer;
