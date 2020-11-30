import { normalizedUsers } from '../../fixtures';
import { REVIEW_ADD } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({...acc, [user.id]: user}),
  {});

const reducer = (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case REVIEW_ADD:
      return {
        ...users,
        [payload.userId]: {
          id: payload.userId,
          name: payload.name
        }
      };
    default:
      return users;
  }
};

export default reducer;
