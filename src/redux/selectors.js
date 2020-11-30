import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const restaurantReviewsSelector = (state, restaurantId) => state.restaurants[restaurantId].reviews;

export const restaurantListSelector = createSelector(
  restaurantsSelector,
  restaurants => Object.keys(restaurants).map(id => restaurants[id])
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

export const makeRatingSelector = () => createSelector(
  reviewsSelector,
  restaurantReviewsSelector,
  (reviews, restaurantReviews) => {
    const total = restaurantReviews
      .map(id => reviews[id])
      .reduce((acc, { rating }) => acc + rating, 0);

    return Math.round(total / restaurantReviews.length);
  }
);
