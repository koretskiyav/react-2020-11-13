import { createSelector } from 'reselect';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue
  );

export const hasVisited = (selector) =>
  createSelector(
    selector,
    (_, props) => props.restaurantId,
    (visitedRestaurants, restaurantId) =>
      visitedRestaurants.includes(restaurantId)
  );
