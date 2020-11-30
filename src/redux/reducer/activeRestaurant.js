import { normalizedRestaurants } from '../../fixtures';
import { RESTAURANT_ACTIVATE } from '../constants';

const defaultActiveRestaurant = normalizedRestaurants[0]?.id;

const reducer = (activeRestaurant = defaultActiveRestaurant, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESTAURANT_ACTIVATE:
      return payload.id;
    default:
      return activeRestaurant;
  }
};

export default reducer;