// import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { normalizedRestaurants } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      const { id, activeRestaurant } = { ...payload.values };
      restaurants[activeRestaurant]['reviews'].push(id);
      return { ...restaurants };
    default:
      return restaurants;
  }
};

export default reducer;
