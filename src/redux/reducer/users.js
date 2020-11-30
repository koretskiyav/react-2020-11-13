import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = { ...user };

  return acc;
}, {});

const users = (state = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { userId, name } = action.payload;

      return { ...state, [userId]: { name } };
    default:
      return state;
  }
};

export default users;
