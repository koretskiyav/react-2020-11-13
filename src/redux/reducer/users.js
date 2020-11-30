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
      const id = payload.userId;
      const newUser = {
        id,
        name: payload.values.name,
      };
      return { ...users, [id]: newUser };
    default:
      return users;
  }
};

export default reducer;
