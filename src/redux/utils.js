import { createSelector } from 'reselect';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => {
      return entity[id] || defaultValue;
    }
  );

export const getKeysById = (selector) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => {
      const obj = entity[id];
      return obj == null ? [] : Object.keys(obj);
    }
  );

export const entitiesTransform = (entities) => {
  return Object.values(entities).reduce((total, rest) => {
    const menu = Object.values(rest).reduce((menu, pr) => {
      return { ...menu, [pr.id]: pr };
    }, {});
    return { ...total, ...menu };
  }, {});
};

export const isEntityLoaded = (selector) =>
  createSelector(
    selector,
    (_, { id }) => id,
    (entities, idGroup) => {
      return Object.keys(entities).includes(idGroup);
    }
  );
