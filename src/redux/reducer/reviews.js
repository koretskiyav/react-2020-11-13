import { combineReducers } from 'redux';
import { ADD_REVIEW, LOAD_REVIEWS, SUCCESS} from '../constants';
import { arrToMap, listByIdReducer } from '../utils';

const entities = (state = {}, action) => {
  const { type, payload, response, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    case LOAD_REVIEWS + SUCCESS:
      return { ...state, ...arrToMap(response) };
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  listByRestaurant: listByIdReducer(LOAD_REVIEWS)
});
