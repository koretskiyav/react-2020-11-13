import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

const reducer = (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { id, userId, text, rate } = action.payload;
      return {
        ...reviews,
        [action.payload.id]: { id, userId, text, rating: rate },
      };
    default:
      return reviews;
  }
};

export default reducer;
