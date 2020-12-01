import { normalizedReviews } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

const reducer = (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT:
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          userId: payload.userId,
          text: payload.text,
          rating: payload.rate,
        },
      };
    default:
      return reviews;
  }
};

export default reducer;
