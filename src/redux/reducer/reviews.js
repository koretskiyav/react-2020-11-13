import {normalizedReviews} from '../../fixtures';
import {REVIEW_ADD} from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({...acc, [review.id]: review}),
  {});

const reducer = (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case REVIEW_ADD:
      return [action.payload.review, ...reviews];
    default:
      return reviews;
  }
};

export default reducer;
