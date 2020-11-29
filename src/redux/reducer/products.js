import { normalizedProducts } from '../../fixtures';

const defaultProducts = normalizedProducts.reduce(
  (acc, product) => ({ ...acc, [product.id]: product }),
  {}
);

// { [productId]: product }
const reducer = (products = defaultProducts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};

export default reducer;
