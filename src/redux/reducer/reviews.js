import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = { ...review };

  return acc;
}, {});

const reducer = (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};

export default reducer;
