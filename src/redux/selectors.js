import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

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

const reviewsSelector = (state) => state.reviews.entities;
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
    const ratings = ids.map((id) => reviews[id]?.rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);

const restaurantProductsSelector = (state, props) => state.products.listByRestaurant[props.restaurantId];
const restaurantReviewsSelector = (state, props) => state.reviews.listByRestaurant[props.restaurantId || props.id];

export const isRestaurantProductsLoading = createSelector(
  restaurantProductsSelector,
  (restaurantProducts) => restaurantProducts && restaurantProducts.isLoading
);

export const isRestaurantProductsLoaded = createSelector(
  restaurantProductsSelector,
  (restaurantProducts) => restaurantProducts && restaurantProducts.isLoaded
);

export const isRestaurantReviewsLoading = createSelector(
  restaurantReviewsSelector,
  (restaurantReviews) => restaurantReviews && restaurantReviews.isLoading
);

export const isRestaurantReviewsLoaded = createSelector(
  restaurantReviewsSelector,
  (restaurantReviews) => restaurantReviews && restaurantReviews.isLoaded
);
