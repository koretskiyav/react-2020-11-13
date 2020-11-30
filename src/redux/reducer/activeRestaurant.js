import { SET_ACTIVE } from '../constants';

const reducer = (activeRestaurant = '', action) => {
  const { type } = action;

  switch (type) {
    case SET_ACTIVE:
      return action.payload;
    default:
      return activeRestaurant;
  }
};

export default reducer;
