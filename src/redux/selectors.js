import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products.entities;
const productsLoadingSelector = (state) => state.products.loading;
const productsLoadedSelector = (state) => state.products.loaded;
const reviewsLoadingSelector = (state) => state.reviews.loading;
const reviewsLoadedSelector = (state) => state.reviews.loaded;
const reviewsSelector = (state) => state.reviews.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const menuLoadingSelector = createSelector(
  productsLoadingSelector,
  (_, { restaurantId }) => restaurantId,
  (productsLoading, restaurantId) => productsLoading[restaurantId]
);

export const menuLoadedSelector = createSelector(
  productsLoadedSelector,
  (_, { restaurantId }) => restaurantId,
  (productsLoaded, restaurantId) => productsLoaded[restaurantId]
);

export const reviewsOfRestaurantsLoadingSelector = createSelector(
  reviewsLoadingSelector,
  (_, { restaurantId }) => restaurantId,
  (reviewsLoading, restaurantId) => reviewsLoading[restaurantId]
);

export const reviewsOfRestaurantsLoadedSelector = createSelector(
  reviewsLoadedSelector,
  (_, { restaurantId }) => restaurantId,
  (reviewsLoaded, restaurantId) => reviewsLoaded[restaurantId]
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

const usersSelector = (state) => state.users;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);
export const productAmountSelector = getById(orderSelector, 0);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
