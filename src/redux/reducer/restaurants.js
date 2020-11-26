import { restaurants } from '../../fixtures';

// вместо объектов с продуктами в меню оставляем только id продукта
const initialState = restaurants.map((restaurant) => {
  const menu = restaurant.menu.map((product) => product.id);

  return {
    ...restaurant,
    menu,
  };
});

const reducer = (state = initialState) => state;

export default reducer;
