import { createSelector } from 'reselect';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => {
      console.log('entity', entity);
      console.log('id', id);
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
