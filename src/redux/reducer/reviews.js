import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

const reducer = (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      const { id, rating, text, userId } = { ...payload.values };
      return { ...reviews, [id]: { id, rating, text, userId } };
    default:
      return reviews;
  }
};

export default reducer;
