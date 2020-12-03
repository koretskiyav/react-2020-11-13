import { createSelector } from 'reselect';
import { getById, hasVisited } from './utils';

/**
 *  Restaurants
 */
const restaurantsSelector = (state) => state.restaurants.entities;
export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;
export const restaurantSelector = getById(restaurantsSelector);

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

/**
 *  Products
 */
const productsSelector = (state) => state.products.entities;
export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;
export const productsVisitedSelector = (state) => state.products.visited;
export const productSelector = getById(productsSelector);

export const hasRestaurantProductsVisited = hasVisited(productsVisitedSelector);

/**
 *  Order
 */
const orderSelector = (state) => state.order;

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
export const productAmountSelector = getById(orderSelector, 0);

/**
 *  Users
 */
const usersSelector = (state) => state.users.entities;
export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

/**
 *  Reviews
 */
const reviewsSelector = (state) => state.reviews.entities;
export const reviewsLoadingSelector = (state) => state.reviews.loading;
export const reviewsLoadedSelector = (state) => state.reviews.loaded;
export const reviewsVisitedSelector = (state) => state.reviews.visited;
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review?.userId]?.name,
  })
);

export const hasRestaurantReviewsVisited = hasVisited(reviewsVisitedSelector);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  restaurantSelector,
  (reviews, { reviews: ids }) => {
    const ratings = ids.map((id) => reviews[id]?.rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
