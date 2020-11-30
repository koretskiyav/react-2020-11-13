import { normalizedReviews } from '../../fixtures';
import { REVIEW_ADD } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({...acc, [review.id]: review}),
  {});

const reducer = (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case REVIEW_ADD:
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          userId: payload.userId,
          text: payload.text,
          rating: payload.rating
        }
      };
    default:
      return reviews;
  }
};

export default reducer;
