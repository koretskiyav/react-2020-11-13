import { normalizedReviews } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

const reducer = (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { id, text, rate: rating, userId } = payload;

      return {
        ...reviews,
        [id]: { id, text, rating, userId },
      };
    default:
      return reviews;
  }
};

export default reducer;
