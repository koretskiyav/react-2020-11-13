import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  SET_ACTIVE,
} from './constants';

/*products*/
export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

/*form*/
export const addReview = (data) => ({ type: ADD_REVIEW, payload: { ...data } });

/*restaurant*/
export const setActive = (restaurantId) => ({
  type: SET_ACTIVE,
  payload: restaurantId,
});
