import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

const reducer = (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const id = payload.id;
      const userId = payload.userId;

      const newReview = {
        id: id,
        userId: userId,
        text: payload.values.text,
        rating: payload.values.rate,
      };

      return { ...reviews, [id]: newReview };

    default:
      return reviews;
  }
};

export default reducer;
