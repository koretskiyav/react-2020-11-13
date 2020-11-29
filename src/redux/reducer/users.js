import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = { ...user };

  return acc;
}, {});

const users = (state = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return defaultUsers;
  }
};

export default users;
