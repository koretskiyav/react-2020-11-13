import { DECREMENT, INCREMENT } from '../constants';

const reducer = (amount = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return amount + 1;
    case DECREMENT:
      return amount - 1;
    default:
      return amount;
  }
};

export default reducer;
