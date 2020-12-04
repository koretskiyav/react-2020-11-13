import { createSelector } from 'reselect';
import {FAILURE, REQUEST, SUCCESS} from './constants';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue
  );

export const listByIdReducer = (actionType) => (state = {}, action) => {
  const { type, params } = action;

  switch (type) {
    case actionType + REQUEST:
      return {
        ...state,
        [params.id]: {
          isLoading: true,
          isLoaded: false
        }
      };
    case actionType + SUCCESS:
      return {
        ...state,
        [params.id]: {
          isLoading: false,
          isLoaded: true
        }
      };
    case actionType + FAILURE:
      return {
        ...state,
        [params.id]: {
          isLoading: false,
          isLoaded: false
        }
      };
    default:
      return state;
  }
};
