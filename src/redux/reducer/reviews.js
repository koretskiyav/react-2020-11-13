import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = { ...review };

  return acc;
}, {});

const reducer = (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { id, ...newReview } = action.payload;

      return { ...reviews, [id]: newReview };
    default:
      return reviews;
  }
};

export default reducer;
