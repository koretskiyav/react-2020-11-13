import { normalizedUsers } from '../../fixtures';

const defaultRestaurants = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user.name }),
  {}
);

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};

export default reducer;
