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
      return {
        ...Object.assign(reviews, {
          [payload.values.id]: {
            id: payload.values.id,
            text: payload.values.text,
            rating: payload.values.rate,
            userId: payload.values.userId,
          },
        }),
      };
    default:
      return reviews;
  }
};

export default reducer;
