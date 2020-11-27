import { normalizedReviews as defaultReviews } from '../../fixtures';

const reducer = (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};

export default reducer;
