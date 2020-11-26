import { restaurants } from '../../fixtures';

// собираем общую хэш-мапу из продуктов всех ресторанов
const initialState = restaurants
  .flatMap((restaurant) => restaurant.menu)
  .reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {});

const reducer = (state = initialState) => state;

export default reducer;
