// import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsSelector = (state, id) =>
  state.products[id]?.entities || state.products.entities;
export const productsLoadingSelector = (state, id) =>
  state.products[id]?.loading || state.products.loading;
export const productsLoadedSelector = (state, id) =>
  state.products[id]?.loaded || state.products.loaded;

export const reviewsSelector = (state, id) =>
  state.reviews[id]?.entities || state.reviews.entities;
export const reviewsLoadingSelector = (state, id) =>
  state.reviews[id]?.loading || state.reviews.loading;
export const reviewsLoadedSelector = (state, id) =>
  state.reviews[id]?.loaded || state.reviews.loaded;

export const usersSelector = (state) => state.users.entities;
export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.reviews.loaded;

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

// const reviewsSelector = (state) => state.reviews;
// const usersSelector = (state) => state.users;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const productsListSelector = createSelector(
  productsSelector,
  Object.values
);

export const productAmountSelector = getById(orderSelector, 0);
// export const productSelector = getById(productsSelector);

// const reviewSelector = getById(reviewsSelector);

// export const reviewWitUserSelector = createSelector(
//   reviewSelector,
//   usersSelector,
//   (review, users) => ({
//     ...review,
//     user: users[review.userId]?.name,
//   })
// );

// export const averageRatingSelector = createSelector(
//   reviewsSelector,
//   (_, { reviews }) => reviews,
//   (reviews, ids) => {
//     const ratings = ids.map((id) => reviews[id].rating);
//     return Math.round(
//       ratings.reduce((acc, rating) => acc + rating) / ratings.length
//     );
//   }
// );
