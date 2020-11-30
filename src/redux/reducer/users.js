import { normalizedUsers } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

const reducer = (reviews = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      const { userId: id, name } = { ...payload.values };
      return { ...reviews, [id]: { id, name } };
    default:
      return reviews;
  }
};

export default reducer;
