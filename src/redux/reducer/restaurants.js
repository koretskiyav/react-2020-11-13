import produce from 'immer';
import { ADD_REVIEW, LOAD_RESTAURANTS } from '../constants';
import { arrToMap } from '../utils';

const reducer = (state = {}, action) => {
  const { type, payload, reviewId, response } = action;

  switch (type) {
    case LOAD_RESTAURANTS:
      return arrToMap(response);
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft[payload.restaurantId].reviews.push(reviewId);
      });
    // case ADD_REVIEW:
    //   const restaurant = state[payload.restaurantId];
    //   return {
    //     ...state,
    //     [payload.restaurantId]: {
    //       ...restaurant,
    //       reviews: [...restaurant.reviews, reviewId],
    //     },
    //   };

    default:
      return state;
  }
};

export default reducer;
