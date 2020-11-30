import { v4 as uuidv4 } from 'uuid';
import { REVIEW_ADD } from '../constants';

const review = (store) => (next) => (action) => {
  const { type, payload } = action;

  if (type === REVIEW_ADD) {
    next({
      type: type,
      payload: {
        restaurantId: store.getState().activeRestaurant,
        userId: uuidv4(),
        id: uuidv4(),
        ...payload
      }
    });
  } else {
    next(action);
  }
};

export default review;
