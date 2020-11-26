import { restaurants as defaultRestaurants } from '../../fixtures';

const reducer = (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};

export default reducer;
