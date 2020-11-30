import { createSelector } from 'reselect';

const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const restaurantReviewsIdsSelector = (state, props) => props.restaurant.reviews;

export const averageRatingSelector = createSelector(
  reviewsSelector,
  restaurantReviewsIdsSelector,
  (reviews, reviewsIds) => {
    const total = reviewsIds.reduce((acc, id) => acc + reviews[id].rating, 0);

    return Math.round(total / reviewsIds.length);
  }
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
