import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
export const productsSelector = (state) => state.products.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const reviewsLoadingSelector = (state) => state.reviews.loading;
export const reviewsLoadedSelector = (state) => state.reviews.loaded;

export const restaurantMenuSelector = createSelector(
  productsSelector,
  (_, id) => id,
  (products, id) => products[id]
);

export const restaurantMenuLoadingSelector = createSelector(
  productsLoadingSelector,
  (_, id) => id,
  (loading, id) => !!loading[id]
);

export const restaurantMenuLoadedSelector = createSelector(
  productsLoadedSelector,
  (_, id) => id,
  (loaded, id) => !!loaded[id]
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (productMap, order) => {
    const products = Object.values(productMap).reduce(
      (acc, current) => ({ acc, ...current }),
      {}
    );
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

export const restaurantReviewsLoadingSelector = createSelector(
  reviewsLoadingSelector,
  (_, id) => id,
  (loading, id) => !!loading[id]
);

export const restaurantReviewsLoadedSelector = createSelector(
  reviewsLoadedSelector,
  (_, id) => id,
  (loaded, id) => !!loaded[id]
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const productAmountSelector = getById(orderSelector, 0);

export const reviewWithUserSelector = createSelector(
  usersSelector,
  (_, review) => review,
  (users, review) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const reviewsListSelector = createSelector(
  reviewsSelector,
  (_, id) => id,
  (reviews, id) => reviews[id]
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => (reviews[id] && reviews[id].rating) || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
