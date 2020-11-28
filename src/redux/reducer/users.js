import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

const reducer = (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...Object.assign(users, {
          [payload.values.userId]: {
            id: payload.values.userId,
            name: payload.values.name,
          },
        }),
      };
    default:
      return users;
  }
};

export default reducer;
