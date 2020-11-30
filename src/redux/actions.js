import { INCREMENT, DECREMENT, REMOVE, ADD_REVIEW } from './constants';

/*products*/
export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

/*form*/
export const addReview = (data) => ({ type: ADD_REVIEW, payload: { ...data } });
