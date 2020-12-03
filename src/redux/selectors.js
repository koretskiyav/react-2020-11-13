import { createSelector } from 'reselect';
import { getById, getKeysById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => {
  const productsEntities = Object.values(state.products.loadedEntities);
  const test = productsEntities.reduce((total, rest) => {
    const v = Object.values(rest).reduce((menu, pr) => {
      return { ...menu, [pr.id]: pr };
    }, {});
    return { ...total, ...v };
  }, {});
  return test;
};

const reviewsSelector = (state) => {
  const reviewsEntities = Object.values(state.reviews.loadedEntities);
  const test = reviewsEntities.reduce((total, rest) => {
    const v = Object.values(rest).reduce((menu, pr) => {
      return { ...menu, [pr.id]: pr };
    }, {});
    return { ...total, ...v };
  }, {});
  return test;
};
const usersSelector = (state) => state.users;

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
  (review, users) => {
    console.log('review', review);
    console.log('users', users);
    return {
      ...review,
      user: users[review.userId]?.name,
    };
  }
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

const reviewsLoadedEntitiesSelector = (state) => state.reviews.loadedEntities;
export const reviewsLoadingSelector = (state) => state.reviews.loading;
export const isReviewsLoadedSelector = createSelector(
  reviewsLoadedEntitiesSelector,
  (_, { id }) => id,
  (entities, idGroup) => {
    console.log(entities);
    return Object.keys(entities).includes(idGroup);
  }
);

export const reviewsKeysListSelector = getKeysById(
  reviewsLoadedEntitiesSelector
);

const productsLoadedEntitiesSelector = (state) => state.products.loadedEntities;
export const productsLoadingSelector = (state) => state.products.loading;
export const isProductsLoadedSelector = createSelector(
  productsLoadedEntitiesSelector,
  (_, { id }) => id,
  (entities, idGroup) => {
    return Object.keys(entities).includes(idGroup);
  }
);

export const productsKeysListSelector = getKeysById(
  productsLoadedEntitiesSelector
);
