import { createSelector } from 'reselect';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue
  );

export const findIdInListOfObjects = (list, prop, id) => {
  const restaurant = list.find((higher) => {
    return higher[prop].find((item) => item === id);
  });
  return restaurant && restaurant.id;
};
