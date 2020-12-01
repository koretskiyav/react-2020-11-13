import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';

// { [productId]: product }
const reducer = (state = arrToMap(normalizedProducts), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
