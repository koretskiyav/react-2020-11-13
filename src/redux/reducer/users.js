import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user.name }),
  {}
);

const reducer = (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { userId, name } = action.payload;
      return { ...users, [userId]: name };
    default:
      return users;
  }
};

export default reducer;
